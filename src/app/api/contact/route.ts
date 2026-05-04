import { Resend } from "resend";
import { NextResponse } from "next/server";

const DEFAULT_CONTACT_EMAIL = "madeinwolls@gmail.com";

/** Fallback From when RESEND_FROM_EMAIL is unset; domain must be verified in Resend (not Gmail as From). */
const DEFAULT_RESEND_FROM = "Made in Wolls <noreply@madeinwolls.com>";

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
  const text = buildEnquiryEmailText({
    firstName,
    lastName,
    email,
    phone,
    service,
    message,
  });
  const html = buildEnquiryEmailHtml({
    firstName,
    lastName,
    email,
    phone,
    service,
    message,
  });

  const { error: staffError } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (staffError) {
    console.error("[contact] staff notification", staffError);
    const debug =
      process.env.NODE_ENV === "development"
        ? formatResendError(staffError)
        : undefined;
    return NextResponse.json(
      {
        error: "Could not send your message. Please try again or call us.",
        ...(debug ? { debug } : {}),
      },
      { status: 502 },
    );
  }

  const customerSubject = "We received your enquiry — Made in Wolls";
  const { error: customerError } = await resend.emails.send({
    from,
    to: [email],
    replyTo: to,
    subject: customerSubject,
    text: buildCustomerThankYouText({ firstName, service }),
    html: buildCustomerThankYouHtml({ firstName, service }),
  });

  if (customerError) {
    console.error("[contact] customer thank-you email failed", customerError);
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

function siteBaseUrl(): string {
  const u = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  return u || "https://www.madeinwolls.com";
}

/**
 * Remote images in HTML email must be served from a public HTTPS URL.
 * Localhost/127.0.0.1 is not reachable from Gmail — logo would show broken.
 */
function emailAssetOrigin(): string {
  const base = siteBaseUrl();
  const lower = base.toLowerCase();
  if (
    lower.includes("localhost") ||
    lower.includes("127.0.0.1") ||
    /^http:\/\/192\.168\.\d{1,3}\.\d{1,3}/.test(base) ||
    lower.startsWith("http://0.0.0.0")
  ) {
    return "https://www.madeinwolls.com";
  }
  return base;
}

function emailLogoUrl(): string {
  return `${emailAssetOrigin()}/images/miw-logo-white.png`;
}

function buildEnquiryEmailText(args: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}): string {
  const name = `${args.firstName} ${args.lastName}`;
  const phoneLine = args.phone.trim() || "Not provided";
  return [
    "MADE IN WOLLS — Website enquiry",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    `Name:    ${name}`,
    `Email:   ${args.email}`,
    `Phone:   ${phoneLine}`,
    `Service: ${args.service}`,
    "",
    "Message:",
    args.message,
    "",
    `Reply directly to this email to respond to ${args.email}.`,
    siteBaseUrl(),
  ].join("\n");
}

function buildCustomerThankYouText(args: {
  firstName: string;
  service: string;
}): string {
  const greeting = `Hi ${args.firstName},`;
  return [
    greeting,
    "",
    "Thank you for contacting Made in Wolls.",
    "",
    `We've received your enquiry about "${args.service}" and one of our team will respond as soon as possible.`,
    "",
    "If your matter is urgent, you're welcome to call us on 0410 721 027.",
    "",
    "Kind regards,",
    "Made in Wolls",
    "",
    siteBaseUrl(),
  ].join("\n");
}

function buildCustomerThankYouHtml(args: {
  firstName: string;
  service: string;
}): string {
  const first = escapeHtml(args.firstName);
  const svc = escapeHtml(args.service);
  const base = emailAssetOrigin();
  const logoSrc = emailLogoUrl();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Thank you</title>
</head>
<body style="margin:0;padding:0;background:#F0EEE9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F0EEE9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 12px 40px rgba(28,28,28,0.08);border:1px solid #E0DDD5;">
          <tr>
            <td style="background:#2D5016;padding:28px 28px 24px;text-align:center;">
              <img src="${logoSrc}" width="180" height="auto" alt="Made in Wolls" style="display:block;margin:0 auto 16px;max-width:180px;height:auto;border:0;outline:none;text-decoration:none;" />
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:700;color:#FFFFFF;letter-spacing:-0.02em;line-height:1.25;">
                Thank you for reaching out
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 28px 8px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.65;color:#1C1C1C;">
              <p style="margin:0 0 16px;">Hi ${first},</p>
              <p style="margin:0 0 16px;">
                Thank you for contacting <strong style="color:#2D5016;">Made in Wolls</strong>.
              </p>
              <p style="margin:0 0 16px;">
                We've received your enquiry about <strong>${svc}</strong>. Our team will review your message and reply as soon as we can.
              </p>
              <table role="presentation" cellspacing="0" cellpadding="0" width="100%" style="margin:24px 0;background:#EEF2EB;border-radius:12px;">
                <tr>
                  <td style="padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#5A5A5A;line-height:1.55;">
                    Need something urgently? Call us on
                    <a href="tel:0410721027" style="color:#2D5016;font-weight:700;text-decoration:none;">0410 721 027</a>.
                  </td>
                </tr>
              </table>
              <p style="margin:0;">Kind regards,<br /><strong style="color:#2D5016;">Made in Wolls</strong></p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 28px 28px;text-align:center;border-top:1px solid #E0DDD5;">
              <p style="margin:20px 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#5A5A5A;">
                <a href="${escapeHtml(base)}" style="color:#5A5A5A;text-decoration:underline;">${escapeHtml(base.replace(/^https?:\/\//, ""))}</a>
                · Sydney cleaning · Police-checked team
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#9A9A9A;">
                You're receiving this because you submitted the contact form on our website.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildEnquiryEmailHtml(args: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}): string {
  const name = escapeHtml(`${args.firstName} ${args.lastName}`);
  const em = escapeHtml(args.email);
  const phoneDisplay = args.phone.trim()
    ? escapeHtml(args.phone.trim())
    : '<span style="color:#5A5A5A;font-style:italic;">Not provided</span>';
  const svc = escapeHtml(args.service);
  const msgHtml = escapeHtml(args.message).replace(/\r\n/g, "\n").replace(/\n/g, "<br />");
  const base = emailAssetOrigin();
  const logoSrc = emailLogoUrl();

  const row = (label: string, value: string) => `
  <tr>
    <td style="padding:14px 20px;border-bottom:1px solid #E0DDD5;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#5A5A5A;">
      ${label}
    </td>
    <td style="padding:14px 20px;border-bottom:1px solid #E0DDD5;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1C1C1C;font-weight:600;">
      ${value}
    </td>
  </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Website enquiry</title>
</head>
<body style="margin:0;padding:0;background:#F0EEE9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F0EEE9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 12px 40px rgba(28,28,28,0.08);border:1px solid #E0DDD5;">
          <tr>
            <td style="background:#2D5016;padding:28px 28px 24px;text-align:center;">
              <img src="${logoSrc}" width="180" height="auto" alt="Made in Wolls" style="display:block;margin:0 auto 16px;max-width:180px;height:auto;border:0;outline:none;text-decoration:none;" />
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:700;color:#FFFFFF;letter-spacing:-0.02em;line-height:1.25;">
                New website enquiry
              </p>
              <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:rgba(255,255,255,0.85);line-height:1.5;">
                Someone submitted the contact form on your site.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                ${row("Name", name)}
                ${row("Email", `<a href="mailto:${em}" style="color:#2D5016;text-decoration:none;font-weight:600;">${em}</a>`)}
                ${row("Phone", phoneDisplay)}
                ${row("Service", `<span style="color:#2D5016;">${svc}</span>`)}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px 28px;">
              <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#71797E;">
                Message
              </p>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;color:#1C1C1C;background:#FAF8F3;border-left:4px solid #d4a20c;border-radius:0 12px 12px 0;padding:18px 20px;">
                ${msgHtml}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 28px 28px;">
              <table role="presentation" cellspacing="0" cellpadding="0" width="100%" style="background:#EEF2EB;border-radius:12px;padding:16px 18px;">
                <tr>
                  <td style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#5A5A5A;line-height:1.55;">
                    <strong style="color:#2D5016;">Reply</strong> to this email to respond directly to <a href="mailto:${em}" style="color:#2D5016;font-weight:600;">${em}</a>.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 28px 28px;text-align:center;border-top:1px solid #E0DDD5;">
              <p style="margin:20px 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#5A5A5A;">
                <a href="${escapeHtml(base)}" style="color:#5A5A5A;text-decoration:underline;">${escapeHtml(base.replace(/^https?:\/\//, ""))}</a>
                · Sydney cleaning · Police-checked team
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#9A9A9A;">
                This message was sent from the Made in Wolls website contact form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
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
