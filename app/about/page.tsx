export default function AboutPage() {
  return (
    <main className="about-page">
      <style>{`
        .about-page {
          min-height: 70vh;
          background: #fff;
          padding: 60px 20px;
        }

        .about-shell {
          max-width: 980px;
          margin: 0 auto;
        }

        .about-hero {
          position: relative;
          min-height: 470px;
          border-radius: 18px;
          overflow: hidden;
          background-image:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.82) 0%,
              rgba(0, 0, 0, 0.68) 35%,
              rgba(0, 0, 0, 0.24) 62%,
              rgba(0, 0, 0, 0.05) 100%
            ),
            url("https://santvisionfilms.site/Images/Topics/Aug_muziktopics/About_Hero.webp");
          background-size: cover;
          background-position: center;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
        }

        .about-hero-content {
          position: relative;
          z-index: 1;
          max-width: 570px;
          min-height: 470px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px;
          color: #fff;
        }

        .about-kicker {
          margin: 0 0 14px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c790ff;
          font-weight: 800;
          font-size: 0.9rem;
        }

        .about-title {
          margin: 0 0 20px;
          font-size: clamp(2.4rem, 6vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: #fff;
        }

        .about-intro {
          margin: 0;
          max-width: 540px;
          font-size: clamp(1.05rem, 2vw, 1.22rem);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.9);
        }

        .about-content {
          margin-top: 34px;
          background: #fbfaf7;
          padding: 42px;
          border-radius: 18px;
          color: #111;
          line-height: 1.75;
        }

        .about-copy {
          max-width: 780px;
        }

        .about-copy p {
          margin: 0 0 22px;
          font-size: 1.03rem;
          color: #2f2f2f;
        }

        .about-copy strong {
          color: #111;
          font-weight: 800;
        }

        .about-highlight {
          margin: 32px 0;
          padding: 26px 28px;
          border-left: 5px solid #7B2CBF;
          background: linear-gradient(
            135deg,
            rgba(123, 44, 191, 0.07),
            rgba(110, 193, 228, 0.08)
          );
          border-radius: 0 16px 16px 0;
        }

        .about-highlight p {
          margin: 0;
          font-size: 1.08rem;
          line-height: 1.65;
          font-weight: 700;
          color: #171717;
        }

        .about-focus {
          margin-top: 34px;
          padding-top: 28px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .about-focus h2 {
          margin: 0 0 16px;
          font-size: clamp(1.45rem, 3vw, 1.9rem);
          line-height: 1.2;
        }

        .about-focus p {
          margin: 0;
          max-width: 760px;
          color: #444;
          font-size: 1.02rem;
        }

        @media (max-width: 760px) {
          .about-page {
            padding: 34px 16px;
          }

          .about-hero {
            min-height: 430px;
            border-radius: 14px;
            background-position: 68% center;
          }

          .about-hero-content {
            min-height: 430px;
            padding: 32px 24px;
            justify-content: flex-end;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.15) 20%,
              rgba(0, 0, 0, 0.78) 100%
            );
          }

          .about-title {
            font-size: clamp(2.2rem, 11vw, 3.3rem);
          }

          .about-content {
            margin-top: 24px;
            padding: 28px 20px;
            border-radius: 14px;
          }

          .about-highlight {
            padding: 22px 20px;
          }
        }
      `}</style>

      <div className="about-shell">
        <section className="about-hero">
          <div className="about-hero-content">
            <p className="about-kicker">MusikTopics</p>

            <h1 className="about-title">About MusikTopics</h1>

            <p className="about-intro">
              A dedicated home for music-focused articles, creative
              perspectives, industry developments, and conversations
              surrounding the experience of making and sharing music.
            </p>
          </div>
        </section>

        <section className="about-content">
          <div className="about-copy">
            <p>
              <strong>MusikTopics</strong> began as a single menu page inside
              NoNameMusik.com, created as a place for articles and conversations
              about music, creativity, technology, and the experiences that
              come with being a musician and creator.
            </p>

            <p>
              As that section began attracting its own activity and traffic, it
              became clear that the content was developing an identity of its
              own.
            </p>

            <p>
              NoNameMusik.com has a broader purpose, with music releases and
              other components competing for space and attention. Moving
              MusikTopics to its own domain gives these articles room to grow
              without sharing that space with the other areas of the NoName
              Musik platform.
            </p>

            <div className="about-highlight">
              <p>
                MusikTopics now has a dedicated place to focus on the ideas,
                challenges, decisions, technology, and real-world experiences
                surrounding music and the creative process.
              </p>
            </div>

            <p>
              Today, MusikTopics is a standalone home for music-focused
              articles, creative perspectives, industry developments, and
              conversations surrounding the process of creating, performing,
              releasing, and experiencing music.
            </p>

            <p>
              The goal is not simply to report what is happening in music.
              MusikTopics also explores the thoughts, decisions, challenges,
              technology, and real-world experiences behind the music.
            </p>

            <div className="about-focus">
              <h2>What You’ll Find Here</h2>

              <p>
                From monthly feature articles to music news and locally focused
                topics, MusikTopics is designed to give these conversations a
                dedicated place of their own while leaving room for the site to
                continue growing over time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}