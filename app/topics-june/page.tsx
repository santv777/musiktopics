import { juneBlogHtml } from "@/content/juneBlogHtml";

export default function TopicsJunePage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <div dangerouslySetInnerHTML={{ __html: juneBlogHtml }} />
    </main>
  );
}