"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      style={{
        background: "#050505",
        color: "#fff",
        borderBottom: "1px solid rgba(255,255,255,.12)",
      }}
    >
      <div className="site-header-inner">
        <Link
          href="/"
          className="site-brand"
          onClick={closeMenu}
          aria-label="MusikTopics Home"
        >
          <img
            src="https://santvisionfilms.site/Images/Topics/Aug_muziktopics/siteLogo1.webp"
            alt="MusikTopics"
            className="site-logo"
          />
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`site-nav ${menuOpen ? "site-nav-open" : ""}`}
          aria-label="Primary navigation"
        >
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/latest-news" onClick={closeMenu}>
            Music News
          </Link>

          <Link href="/atlanta-topics" onClick={closeMenu}>
            Atlanta Topics
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .site-header-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          position: relative;
        }

        .site-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .site-logo {
          display: block;
          width: auto;
          height: 80px;
          max-width: 280px;
          object-fit: contain;
        }

        .site-nav {
          display: flex;
          align-items: center;
          gap: 28px;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .site-nav a {
          color: #fff;
          text-decoration: none;
        }

        .site-nav a:hover {
          opacity: 0.78;
        }

        .menu-button {
          display: none;
          width: 42px;
          height: 38px;
          padding: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          background: transparent;
          cursor: pointer;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        .menu-button span {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 999px;
        }

        @media (max-width: 760px) {
          .site-header-inner {
            padding: 12px 16px;
            flex-wrap: wrap;
            gap: 0;
            position: relative;
            min-height: 74px;
          }

          .site-brand {
            width: auto;
            margin: 0;
          }

          .site-logo {
            height: 46px;
            max-width: 190px;
          }

          .menu-button {
            display: flex;
            position: absolute;
            left: 50%;
            top: 37px;
            transform: translate(-50%, -50%);
            margin: 0;
          }

          .site-nav {
            display: none;
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            margin-top: 22px;
            padding-top: 20px;
            padding-bottom: 8px;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
          }

          .site-nav-open {
            display: flex;
          }

          .site-nav a {
            display: flex;
            align-items: center;
            width: 100%;
            min-height: 68px;
            padding: 20px 8px;
            line-height: 1.4;
            font-size: 1.08rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            box-sizing: border-box;
          }
        }
      `}</style>
    </header>
  );
}