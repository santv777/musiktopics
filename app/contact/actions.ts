"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please complete all fields before sending your message.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "MusikTopics <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    console.error("MusikTopics contact environment variables are missing.");

    return {
      status: "error",
      message:
        "The contact service is temporarily unavailable. Please try again later.",
    };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: `MusikTopics contact message from ${name}`,
    text: `New MusikTopics contact message

Name: ${name}
Email: ${email}

Message:
${message}
`,
  });

  if (error) {
    console.error("Resend email error:", error);

    return {
      status: "error",
      message: "Your message could not be sent. Please try again.",
    };
  }

  console.log("MusikTopics contact email sent successfully.");

  return {
    status: "success",
    message: "Thanks! Your message has been sent successfully.",
  };
}