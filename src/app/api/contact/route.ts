import { Resend } from "resend";
import { NextResponse } from "next/server";

const DEFAULT_CONTACT_EMAIL = "madeinwolls@gmail.com";

/** Resend only accepts verified domain senders or their onboarding address — not personal Gmail as From. */
const DEFAULT_RESEND_FROM = "Made in Wolls <onboarding@resend.dev>";

/** Where enquiries are delivered */
function contactToEmail(): string {
  const v = (process.env.CONTACT_TO_EMAIL ?? DEFAULT_CONTACT_EMAIL).trim();
  return v || DEFAULT_CONTACT_EMAIL;
}

/**
 * "From" must be authorized in Resend (verified domain, or Resend test sender).
 * Do not default to CONTACT_TO_EMAIL — Gmail/other personal inboxes are rejected as From.
 */
function resendFromEmail(): string {
  const explicit = process.env.RESEND_FROM_EMAIL?.trim();
  return explicit || DEFAULT_RESEND_FROM;
}

const ALLOWED_SERVICES = [
  "Regular Home Cleaning",
  "Spring & Deep Cleaning",
  "End of Lease / Bond Clean",
  "Office & Commercial Cleaning",
  "Airbnb Cleaning",
  "Church Cleaning",
  "Childcare Cleaning",
  "Carpet Cleaning",
  "Other",
] as const;

type Body = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function trimMax(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = resendFromEmail();
  const to = contactToEmail();

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured." },
      { status: 500 },
    );
  }

  if (!from) {
    return NextResponse.json(
      { error: "Sender email is not configured." },
      { status: 500 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = trimMax(body.firstName, 120);
  const lastName = trimMax(body.lastName, 120);
  const email = trimMax(body.email, 254);
  const phone = trimMax(body.phone, 40);
  const service = trimMax(body.service, 120);
  const message = trimMax(body.message, 8000);

  if (!firstName || !lastName) {
    return NextResponse.json(
      { error: "Please enter your first and last name." },
      { status: 400 },
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!ALLOWED_SERVICES.includes(service as (typeof ALLOWED_SERVICES)[number])) {
    return NextResponse.json(
      { error: "Please select a service." },
      { status: 400 },
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: "Please enter a message (at least a few words)." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const subject = `Website enquiry — ${service}`;
  const text = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone || "(not provided)"}`,
    `Service: ${service}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "(not provided)"}</p>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <hr />
    <p><strong>Message</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[contact]", error);
    const debug =
      process.env.NODE_ENV === "development"
        ? formatResendError(error)
        : undefined;
    return NextResponse.json(
      {
        error: "Could not send your message. Please try again or call us.",
        ...(debug ? { debug } : {}),
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatResendError(error: unknown): string {
  if (error && typeof error === "object" && "message" in error) {
    const m = (error as { message?: unknown }).message;
    if (typeof m === "string") return m;
  }
  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}
