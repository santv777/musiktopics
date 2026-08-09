import { getRssFeed } from "@/lib/rss";

export const dynamic = "force-dynamic";

function decodeHtmlEntities(text: string) {
  return text
    .replace(/&#(\d+);/g, (_, code) =>
      String.fromCharCode(Number(code))
    )
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) =>
      String.fromCharCode(parseInt(code, 16))
    )
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

export default async function AtlantaTopicsPage() {
  const feedUrl = "https://www.atlantamagazine.com/feed/";
  const items = await getRssFeed(feedUrl);

  return (
    <main className="atlanta-topics-page">
      <style>{`
        .atlanta-topics-page {
          position: relative;
          min-height: 100vh;
          padding: 56px 20px 72px;
          background-image:
            linear-gradient(
              180deg,
              rgba(5, 5, 10, 0.52) 0%,
              rgba(7, 6, 16, 0.72) 32%,
              rgba(10, 8, 18, 0.82) 100%
            ),
            url("https://santvisionfilms.site/Images/Topics/Aug_muziktopics/ATL_Background.webp");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          color: #fff;
        }

        .atlanta-topics-shell {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .atlanta-topics-intro {
          max-width: 760px;
          margin-bottom: 34px;
          padding: 6px 0 0;
        }

        .atlanta-topics-kicker {
          display: inline-block;
          margin: 0 0 14px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(123, 44, 191, 0.22);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #f0d8ff;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .atlanta-topics-intro h1 {
          margin: 0 0 16px;
          font-size: clamp(2.4rem, 6vw, 4.6rem);
          line-height: 0.98;
          letter-spacing: -0.04em;
          font-weight: 800;
          text-shadow: 0 8px 28px rgba(0, 0, 0, 0.3);
        }

        .atlanta-topics-intro p {
          max-width: 640px;
          margin: 0;
          font-size: 1.06rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.28);
        }

        .atlanta-topics-content {
          background: rgba(252, 249, 244, 0.94);
          color: #111;
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 24px;
          padding: 42px;
        }

        .atlanta-topics-section-heading {
          margin-bottom: 28px;
        }

        .atlanta-topics-section-heading h2 {
          margin: 0 0 12px;
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .atlanta-topics-section-heading p {
          max-width: 760px;
          margin: 0;
          color: #555;
          font-size: 1rem;
          line-height: 1.75;
        }

        .atlanta-topics-grid {
          display: grid;
          gap: 18px;
        }

        .atlanta-topics-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          padding: 24px 24px 22px;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
        }

        .atlanta-topics-card:hover {
          transform: translateY(-2px);
          border-color: rgba(123, 44, 191, 0.24);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.08);
        }

        .atlanta-topics-card h3 {
          margin: 0 0 10px;
          font-size: 1.2rem;
          line-height: 1.35;
          font-weight: 700;
        }

        .atlanta-topics-card h3 a {
          color: #111;
          text-decoration: none;
        }

        .atlanta-topics-card h3 a:hover {
          color: #7b2cbf;
        }

        .atlanta-topics-date {
          margin: 0 0 11px;
          color: #777;
          font-size: 0.88rem;
        }

        .atlanta-topics-description {
          margin: 0 0 14px;
          color: #444;
          font-size: 0.98rem;
          line-height: 1.7;
        }

        .atlanta-topics-link {
          display: inline-block;
          margin-top: 2px;
          color: #7b2cbf;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
        }

        .atlanta-topics-link:hover {
          text-decoration: underline;
        }

        .atlanta-topics-empty {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 16px;
          padding: 22px;
          color: #444;
        }

        .atlanta-topics-source {
          margin: 30px 0 0;
          padding-top: 18px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          color: #666;
          font-size: 0.86rem;
        }

        @media (max-width: 760px) {
          .atlanta-topics-page {
            padding: 34px 16px 48px;
            background-position: center center;
          }

          .atlanta-topics-intro {
            margin-bottom: 24px;
          }

          .atlanta-topics-kicker {
            margin-bottom: 12px;
            font-size: 0.74rem;
            letter-spacing: 0.12em;
          }

          .atlanta-topics-intro h1 {
            font-size: clamp(2rem, 10vw, 3rem);
            line-height: 1.02;
            margin-bottom: 14px;
          }

          .atlanta-topics-intro p {
            font-size: 0.98rem;
            line-height: 1.7;
          }

          .atlanta-topics-content {
            padding: 26px 18px;
            border-radius: 18px;
          }

          .atlanta-topics-section-heading {
            margin-bottom: 22px;
          }

          .atlanta-topics-section-heading h2 {
            font-size: 1.95rem;
          }

          .atlanta-topics-section-heading p {
            font-size: 0.98rem;
          }

          .atlanta-topics-card {
            padding: 20px;
            border-radius: 14px;
          }

          .atlanta-topics-card h3 {
            font-size: 1.12rem;
          }
        }
      `}</style>

      <div className="atlanta-topics-shell">
        <section className="atlanta-topics-intro">
          <p className="atlanta-topics-kicker">Atlanta Topics</p>

          <h1>Stories from Atlanta&apos;s culture, arts, and creative life.</h1>

          <p>
            A visually immersive Atlanta feed experience featuring current
            stories on local culture, people, places, creativity, and city
            developments.
          </p>
        </section>

        <section className="atlanta-topics-content">
          <div className="atlanta-topics-section-heading">
            <h2>Latest Atlanta Stories</h2>

            <p>
              Current stories covering Atlanta culture, arts, creativity,
              people, places, and local developments. Headlines open on the
              original publisher&apos;s website.
            </p>
          </div>

          {items.length === 0 && (
            <p className="atlanta-topics-empty">
              Atlanta topics are temporarily unavailable. Please check back
              soon.
            </p>
          )}

          <div className="atlanta-topics-grid">
            {items.slice(0, 10).map((item) => {
              const cleanTitle = decodeHtmlEntities(item.title);

              const cleanDescription = item.description
                ? decodeHtmlEntities(
                    item.description.replace(/<[^>]*>/g, "")
                  ).slice(0, 240)
                : "";

              return (
                <article className="atlanta-topics-card" key={item.link}>
                  <h3>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cleanTitle}
                    </a>
                  </h3>

                  {item.pubDate && (
                    <p className="atlanta-topics-date">
                      {new Date(item.pubDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  )}

                  {cleanDescription && (
                    <p className="atlanta-topics-description">
                      {cleanDescription}...
                    </p>
                  )}

                  <a
                    className="atlanta-topics-link"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read full story →
                  </a>
                </article>
              );
            })}
          </div>

          <p className="atlanta-topics-source">Source: Atlanta Magazine</p>
        </section>
      </div>
    </main>
  );
}