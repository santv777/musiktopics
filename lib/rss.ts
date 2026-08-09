import { XMLParser } from "fast-xml-parser";

export type RssItem = {
  title: string;
  link: string;
  pubDate?: string;
  description?: string;
};

type FeedItem = {
  title?: string;
  link?: string | { "@_href"?: string; "@_rel"?: string } | Array<{ "@_href"?: string; "@_rel"?: string }>;
  pubDate?: string;
  description?: string;
  updated?: string;
  published?: string;
  summary?: string;
  content?: string;
};

function cleanHtml(value: string) {
  return value.replace(/<[^>]*>/g, "").trim();
}

function normalizeArray(value: FeedItem | FeedItem[] | undefined): FeedItem[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function getAtomLink(link: FeedItem["link"]) {
  if (!link) return "#";

  if (typeof link === "string") {
    return link;
  }

  if (Array.isArray(link)) {
    const alternate = link.find((linkItem) => linkItem["@_rel"] === "alternate");
    return alternate?.["@_href"] || link[0]?.["@_href"] || "#";
  }

  return link["@_href"] || "#";
}

export async function getRssFeed(feedUrl: string): Promise<RssItem[]> {
  const response = await fetch(feedUrl, {
    cache: "no-store",
    headers: {
      "User-Agent": "Mozilla/5.0",
      Accept: "application/rss+xml, application/xml, text/xml",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch RSS feed: ${response.status}`);
  }

  const xml = await response.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
  });

  const data = parser.parse(xml);

  // Standard RSS feeds
  const rssItems = normalizeArray(data?.rss?.channel?.item);

  if (rssItems.length > 0) {
    return rssItems.map((item) => ({
      title: String(item.title || "Untitled"),
      link: typeof item.link === "string" ? item.link : getAtomLink(item.link),
      pubDate: item.pubDate ? String(item.pubDate) : undefined,
      description: item.description ? cleanHtml(String(item.description)) : undefined,
    }));
  }

  // Atom feeds
  const atomItems = normalizeArray(data?.feed?.entry);

  if (atomItems.length > 0) {
    return atomItems.map((item) => ({
      title: String(item.title || "Untitled"),
      link: getAtomLink(item.link),
      pubDate: item.updated
        ? String(item.updated)
        : item.published
        ? String(item.published)
        : undefined,
      description: item.summary
        ? cleanHtml(String(item.summary))
        : item.content
        ? cleanHtml(String(item.content))
        : undefined,
    }));
  }

  return [];
}