"use client";

import { useEffect, useState } from "react";

type SponsorAd = {
  image: string;
  alt: string;
  link: string;
};

type SponsorManifest = {
  topBannerAds?: SponsorAd[];
};

const MANIFEST_URL =
  "https://sponsor8-qy4vr.bunny.run/manifest";

const ROTATION_INTERVAL = 8000;
const FADE_DURATION = 450;

export default function SponsorBanner() {
  const [ads, setAds] = useState<SponsorAd[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadSponsorAds() {
      try {
        const response = await fetch(MANIFEST_URL, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            `Sponsor manifest returned ${response.status}`
          );
        }

        const data: SponsorManifest = await response.json();

        if (cancelled) {
          return;
        }

        const availableAds = Array.isArray(data.topBannerAds)
          ? data.topBannerAds
          : [];

        setAds(availableAds);
        setCurrentIndex(0);
        setHasError(false);
      } catch (error) {
        console.error(
          "Unable to load sponsor banner:",
          error
        );

        if (!cancelled) {
          setHasError(true);
        }
      }
    }

    loadSponsorAds();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (ads.length <= 1) {
      return;
    }

    let transitionTimer: number | undefined;

    const rotationTimer = window.setInterval(() => {
      setVisible(false);

      transitionTimer = window.setTimeout(() => {
        setCurrentIndex((previousIndex) => {
          return (previousIndex + 1) % ads.length;
        });
      }, FADE_DURATION);
    }, ROTATION_INTERVAL);

    return () => {
      window.clearInterval(rotationTimer);

      if (transitionTimer) {
        window.clearTimeout(transitionTimer);
      }
    };
  }, [ads.length]);

  if (hasError || ads.length === 0) {
    return null;
  }

  const currentAd = ads[currentIndex];

  return (
    <aside className="sponsor-banner" aria-label="Sponsor">
      <div className="sponsor-banner-inner">
        <span className="sponsor-banner-label">
          Sponsor
        </span>

        <a
          className={`sponsor-banner-link ${
            visible ? "is-visible" : "is-hidden"
          }`}
          href={currentAd.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
        >
          <img
            className="sponsor-banner-image"
            src={currentAd.image}
            alt={currentAd.alt}
            onLoad={() => setVisible(true)}
          />
        </a>
      </div>

      <style jsx>{`
        .sponsor-banner {
          width: 100%;
          padding: 18px 20px 8px;
          background: #ffffff;
          box-sizing: border-box;
        }

        .sponsor-banner-inner {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
        }

        .sponsor-banner-label {
          display: block;
          margin-bottom: 6px;
          color: #6b6b6b;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          line-height: 1;
          text-align: center;
          text-transform: uppercase;
        }

        .sponsor-banner-link {
          display: block;
          width: 100%;
          overflow: hidden;
          text-decoration: none;
          transition: opacity ${FADE_DURATION}ms ease;
        }

        .sponsor-banner-link.is-visible {
          opacity: 1;
        }

        .sponsor-banner-link.is-hidden {
          opacity: 0;
        }

        .sponsor-banner-image {
          display: block;
          width: 100%;
          height: auto;
          margin: 0 auto;
          object-fit: contain;
        }

        @media (max-width: 760px) {
          .sponsor-banner {
            padding: 14px 12px 6px;
          }

          .sponsor-banner-inner {
            max-width: none;
          }

          .sponsor-banner-label {
            font-size: 0.66rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sponsor-banner-link {
            transition: none;
          }
        }
      `}</style>
    </aside>
  );
}