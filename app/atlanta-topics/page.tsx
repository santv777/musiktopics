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
    .replace(/&apos;/g, "'")
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
          min-height: 70vh;
          background: #fff;
          padding: 60px 20px;
        }

        .atlanta-topics-shell {
          max-width: 980px;
          margin: 0 auto;
        }

        .atlanta-topics-hero {
          position: relative;
          min-height: 430px;
          border-radius: 18px;
          overflow: hidden;
          background-image:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.16) 0%,
              rgba(0, 0, 0, 0.08) 45%,
              rgba(0, 0, 0, 0.02) 100%
            ),
            url("https://santvisionfilms.site/Images/Topics/Aug_muziktopics/ATL_News.webp");
          background-size: cover;
          background-position: center;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
        }

        .atlanta-topics-content {
          margin-top: 34px;
          background: #fbfaf7;
          padding: 42px;
          border-radius: 18px;
          color: #111;
          line-height: 1.7;
        }

        .atlanta-topics-section-heading {
          margin-bottom: 30px;
        }

        .atlanta-topics-section-heading h1 {
          margin: 0 0 10px;
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .atlanta-topics-section-heading p {
          max-width: 720px;
          margin: 0;
          color: #666;
          font-size: 0.95rem;
        }

        .atlanta-topics-grid {
          display: grid;
          gap: 18px;
        }

        .atlanta-topics-card {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.11);
          border-radius: 14px;
          padding: 23px 24px;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
        }

        .atlanta-topics-card:hover {
          transform: translateY(-2px);
          border-color: rgba(123, 44, 191, 0.25);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.07);
        }

        .atlanta-topics-card h2 {
          margin: 0 0 9px;
          font-size: 1.22rem;
          line-height: 1.34;
          font-weight: 700;
        }

        .atlanta-topics-card h2 a {
          color: #111;
          text-decoration: none;
        }

        .atlanta-topics-card h2 a:hover {
          color: #7B2CBF;
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
          line-height: 1.65;
        }

        .atlanta-topics-link {
          display: inline-block;
          margin-top: 2px;
          color: #7B2CBF;
          font-weight: 700;
          font-size: 0.94rem;
          text-decoration: none;
        }

        .atlanta-topics-link:hover {
          text-decoration: underline;
        }

        .atlanta-topics-empty {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 14px;
          padding: 22px;
          color: #444;
        }

        .atlanta-topics-source {
          margin: 30px 0 0;
          padding-top: 18px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          color: #777;
          font-size: 0.85rem;
        }

        @media (max-width: 760px) {
          .atlanta-topics-page {
            padding: 34px 16px;
          }

          .atlanta-topics-hero {
            min-height: 310px;
            border-radius: 14px;
            background-position: center;
          }

          .atlanta-topics-content {
            margin-top: 24px;
            padding: 28px 20px;
            border-radius: 14px;
          }

          .atlanta-topics-card {
            padding: 20px;
          }

          .atlanta-topics-card h2 {
            font-size: 1.12rem;
          }
        }
      `}</style>

      <div className="atlanta-topics-shell">
        <section
          className="atlanta-topics-hero"
          aria-label="MusikTopics Atlanta Topics"
        />

        <section className="atlanta-topics-content">
          <div className="atlanta-topics-section-heading">
            <h1>Latest Atlanta Stories</h1>

            <p>
              Current stories covering Atlanta culture, arts, creativity,
              people, places, and local developments. Headlines open on the
              original publisher&apos;s website.
            </p>
          </div>

          {items.length === 0 && (
            <p className="atlanta-topics-empty">
              Atlanta topics are temporarily unavailable. Please check back soon.
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
                <article
                  className="atlanta-topics-card"
                  key={item.link}
                >
                  <h2>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cleanTitle}
                    </a>
                  </h2>

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

          <p className="atlanta-topics-source">
            Source: Atlanta Magazine
          </p>
        </section>
      </div>
    </main>
  );
}