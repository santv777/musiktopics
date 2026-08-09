import { augustBlogHtml } from "@/content/augustBlogHtml";

export default function ConfidenceWhileFearIsPresentPage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <div dangerouslySetInnerHTML={{ __html: augustBlogHtml }} />
    </main>
  );
}