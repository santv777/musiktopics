import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: "#050505",
        color: "rgba(255,255,255,.82)",
        borderTop: "1px solid rgba(255,255,255,.12)",
        marginTop: "0",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "34px 20px",
          display: "grid",
          gap: "16px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontWeight: 800,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          MusikTopics
        </p>

        <p
          style={{
            margin: 0,
            lineHeight: 1.6,
            maxWidth: "680px",
          }}
        >
          Music-focused articles, creative perspectives, industry developments,
          technology, and conversations surrounding the process of creating and
          sharing music.
        </p>

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
            fontWeight: 700,
          }}
        >
          <Link href="/" style={footerLinkStyle}>
            Home
          </Link>

          <Link href="/latest-news" style={footerLinkStyle}>
            Music News
          </Link>

          <Link href="/atlanta-topics" style={footerLinkStyle}>
            Atlanta Topics
          </Link>

          <Link href="/about" style={footerLinkStyle}>
            About
          </Link>

          <Link href="/contact" style={footerLinkStyle}>
            Contact
          </Link>
        </div>

        <p
          style={{
            margin: "10px 0 0",
            fontSize: "0.88rem",
            color: "rgba(255,255,255,.62)",
          }}
        >
          © {new Date().getFullYear()} MusikTopics. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: "rgba(255,255,255,.82)",
  textDecoration: "none",
};