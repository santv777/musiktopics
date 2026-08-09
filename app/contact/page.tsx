import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <style>{`
        .contact-page {
          min-height: 70vh;
          background: #fff;
          padding: 60px 20px;
        }

        .contact-shell {
          max-width: 980px;
          margin: 0 auto;
        }

        .contact-hero {
          position: relative;
          overflow: hidden;
          min-height: 360px;
          border-radius: 18px;
          background:
            radial-gradient(
              circle at 82% 24%,
              rgba(110, 193, 228, 0.22),
              transparent 34%
            ),
            radial-gradient(
              circle at 72% 78%,
              rgba(123, 44, 191, 0.3),
              transparent 34%
            ),
            linear-gradient(
              135deg,
              #0d0d0f 0%,
              #17131d 52%,
              #22142e 100%
            );
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
        }

        .contact-hero::after {
          content: "";
          position: absolute;
          width: 340px;
          height: 340px;
          right: -90px;
          top: -100px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          box-shadow:
            0 0 0 55px rgba(255, 255, 255, 0.025),
            0 0 0 110px rgba(255, 255, 255, 0.018);
          pointer-events: none;
        }

        .contact-hero-content {
          position: relative;
          z-index: 1;
          max-width: 650px;
          min-height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px;
          color: #fff;
        }

        .contact-kicker {
          margin: 0 0 14px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c790ff;
          font-weight: 800;
          font-size: 0.9rem;
        }

        .contact-title {
          margin: 0 0 20px;
          font-size: clamp(2.4rem, 6vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: #fff;
        }

        .contact-intro {
          margin: 0;
          max-width: 610px;
          font-size: clamp(1.05rem, 2vw, 1.22rem);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.88);
        }

        .contact-content {
          margin-top: 34px;
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(250px, 0.75fr);
          gap: 28px;
          align-items: start;
        }

        .contact-form-card {
          background: #fbfaf7;
          padding: 42px;
          border-radius: 18px;
          color: #111;
        }

        .contact-form-heading {
          margin: 0 0 10px;
          font-size: clamp(1.6rem, 3vw, 2rem);
          line-height: 1.2;
          color: #111;
        }

        .contact-form-copy {
          margin: 0 0 30px;
          max-width: 650px;
          color: #444;
          line-height: 1.7;
          font-size: 1.02rem;
        }

        .contact-form {
          display: grid;
          gap: 20px;
        }

        .contact-field label {
          display: block;
          margin-bottom: 8px;
          font-weight: 800;
          color: #171717;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 14px 16px;
          border: 1px solid rgba(0, 0, 0, 0.16);
          border-radius: 11px;
          background: #fff;
          color: #111;
          font: inherit;
          font-size: 1rem;
          outline: none;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #7B2CBF;
          box-shadow: 0 0 0 3px rgba(123, 44, 191, 0.12);
        }

        .contact-input:disabled,
        .contact-textarea:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .contact-textarea {
          min-height: 170px;
          resize: vertical;
          line-height: 1.55;
        }

        .contact-button {
          justify-self: start;
          border: 0;
          border-radius: 999px;
          padding: 14px 24px;
          background: #111;
          color: #fff;
          font: inherit;
          font-weight: 800;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .contact-button:hover:not(:disabled) {
          background: #7B2CBF;
          transform: translateY(-1px);
        }

        .contact-button:disabled {
          opacity: 0.65;
          cursor: wait;
        }

        .contact-status {
          padding: 15px 17px;
          border-radius: 11px;
          font-weight: 700;
          line-height: 1.5;
        }

        .contact-status-success {
          background: rgba(45, 140, 80, 0.1);
          border: 1px solid rgba(45, 140, 80, 0.25);
          color: #185d32;
        }

        .contact-status-error {
          background: rgba(185, 45, 45, 0.08);
          border: 1px solid rgba(185, 45, 45, 0.22);
          color: #8a2424;
        }

        .contact-side {
          display: grid;
          gap: 18px;
        }

        .contact-info-card {
          padding: 28px;
          border-radius: 18px;
          background: #111;
          color: #fff;
        }

        .contact-info-card h2 {
          margin: 0 0 12px;
          font-size: 1.3rem;
          color: #fff;
        }

        .contact-info-card p {
          margin: 0;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
        }

        .contact-topic-card {
          padding: 26px 28px;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(123, 44, 191, 0.08),
            rgba(110, 193, 228, 0.1)
          );
          border: 1px solid rgba(123, 44, 191, 0.08);
        }

        .contact-topic-card h2 {
          margin: 0 0 10px;
          font-size: 1.2rem;
          line-height: 1.25;
          color: #111;
        }

        .contact-topic-card p {
          margin: 0;
          color: #444;
          line-height: 1.65;
        }

        @media (max-width: 760px) {
          .contact-page {
            padding: 34px 16px;
          }

          .contact-hero {
            min-height: 390px;
            border-radius: 14px;
          }

          .contact-hero-content {
            min-height: 390px;
            padding: 32px 24px;
            justify-content: flex-end;
          }

          .contact-title {
            font-size: clamp(2.2rem, 11vw, 3.3rem);
          }

          .contact-content {
            margin-top: 24px;
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-form-card {
            padding: 28px 20px;
            border-radius: 14px;
          }

          .contact-info-card,
          .contact-topic-card {
            border-radius: 14px;
          }

          .contact-button {
            width: 100%;
            justify-self: stretch;
          }
        }
      `}</style>

      <div className="contact-shell">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <p className="contact-kicker">MusikTopics</p>

            <h1 className="contact-title">Get in Touch</h1>

            <p className="contact-intro">
              Have a question, story idea, music-related topic, or something
              you would like to share with MusikTopics? Send a message below.
            </p>
          </div>
        </section>

        <section className="contact-content">
          <div className="contact-form-card">
            <h2 className="contact-form-heading">Send a Message</h2>

            <p className="contact-form-copy">
              Use the form for general questions, topic suggestions,
              creative conversations, feedback, or inquiries related to
              MusikTopics.
            </p>

            <ContactForm />
          </div>

          <aside className="contact-side">
            <div className="contact-info-card">
              <h2>About Your Message</h2>

              <p>
                Messages submitted here are sent directly through the
                MusikTopics contact system. Please include a valid email
                address if you would like a response.
              </p>
            </div>

            <div className="contact-topic-card">
              <h2>Have a Topic in Mind?</h2>

              <p>
                MusikTopics covers music, creativity, technology, industry
                developments, and the experiences surrounding the process
                of creating and sharing music.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}