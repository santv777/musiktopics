"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  sendContactMessage,
  type ContactFormState,
} from "./actions";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="contact-form"
    >
      <div className="contact-field">
        <label htmlFor="name">Name</label>

        <input
          className="contact-input"
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          disabled={isPending}
        />
      </div>

      <div className="contact-field">
        <label htmlFor="email">Email</label>

        <input
          className="contact-input"
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          disabled={isPending}
        />
      </div>

      <div className="contact-field">
        <label htmlFor="message">Message</label>

        <textarea
          className="contact-textarea"
          id="message"
          name="message"
          required
          placeholder="Write your message..."
          rows={7}
          disabled={isPending}
        />
      </div>

      <button
        className="contact-button"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {state.message && (
        <div
          className={
            state.status === "success"
              ? "contact-status contact-status-success"
              : "contact-status contact-status-error"
          }
          role="status"
          aria-live="polite"
        >
          {state.message}
        </div>
      )}
    </form>
  );
}