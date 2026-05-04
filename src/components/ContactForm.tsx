"use client";

import { type FormEvent, useState } from "react";
import styles from "@/app/contact/contact.module.css";

const SERVICE_OPTIONS = [
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

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setStatus("submitting");

    const form = e.currentTarget;
    const payload = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement)
        .value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        debug?: string;
      };

      if (!res.ok) {
        setStatus("error");
        const base = data.error ?? "Something went wrong. Please try again.";
        setErrorMessage(
          data.debug ? `${base} (${data.debug})` : base,
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="contact-firstName">
            First Name
          </label>
          <input
            id="contact-firstName"
            name="firstName"
            type="text"
            className={styles.formInput}
            placeholder="Your first name"
            required
            autoComplete="given-name"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="contact-lastName">
            Last Name
          </label>
          <input
            id="contact-lastName"
            name="lastName"
            type="text"
            className={styles.formInput}
            placeholder="Your last name"
            required
            autoComplete="family-name"
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className={styles.formInput}
          placeholder="your@email.com"
          required
          autoComplete="email"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="contact-phone">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          className={styles.formInput}
          placeholder="0400 000 000"
          autoComplete="tel"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="contact-service">
          Service Required
        </label>
        <select
          id="contact-service"
          name="service"
          className={styles.formSelect}
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          className={styles.formTextarea}
          rows={5}
          placeholder="Tell us about your cleaning needs, suburb, preferred schedule..."
          required
          minLength={10}
        />
      </div>

      {status === "success" && (
        <p className={styles.formFeedbackSuccess} role="status">
          Thanks — your message was sent. We&apos;ll reply within 2 hours during
          business hours.
        </p>
      )}
      {status === "error" && errorMessage && (
        <p className={styles.formFeedbackError} role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className={styles.formBtn}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry →"}
      </button>
      <p className={styles.formNote}>
        We will respond within 2 hours during business hours.
      </p>
    </form>
  );
}
