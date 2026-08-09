import type { Metadata } from "next";

import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://musiktopics.com"),

  title: {
    default: "MusikTopics — Music, Creativity & Culture",
    template: "%s | MusikTopics",
  },

  description:
    "MusikTopics explores music, creativity, artist development, industry developments, technology, culture, and the experiences surrounding the process of creating and sharing music.",

  keywords: [
    "MusikTopics",
    "music topics",
    "music articles",
    "independent musicians",
    "music industry",
    "music creativity",
    "artist development",
    "music culture",
    "Atlanta music",
    "music news",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "MusikTopics",
    title: "MusikTopics — Music, Creativity & Culture",
    description:
      "Music-focused articles, creative perspectives, industry developments, culture, technology, and the experiences surrounding creating and sharing music.",
    url: "/",
    images: [
      {
        url: "https://santvisionfilms.site/Images/Topics/Aug_muziktopics/About_Hero.webp",
        width: 1200,
        height: 630,
        alt: "MusikTopics",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MusikTopics — Music, Creativity & Culture",
    description:
      "Music-focused articles, creative perspectives, industry developments, culture, technology, and the experiences surrounding creating and sharing music.",
    images: [
      "https://santvisionfilms.site/Images/Topics/Aug_muziktopics/About_Hero.webp",
    ],
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}