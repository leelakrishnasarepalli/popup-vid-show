type PdfDocument = {
  name: string;
  url: string;
};

const pdfModules = import.meta.glob("/src/docs/*.pdf", {
  eager: true,
});

const pdfDocuments: PdfDocument[] = Object.entries(pdfModules).map(([path, mod]) => {
  const url = typeof mod === "string" ? mod : (mod as { default: string }).default;
  const name = path.split("/").pop() ?? "Document";

  return { name, url };
});

export const DocsViewer = () => {
  if (pdfDocuments.length === 0) return null;

  return (
    <section className="bg-muted py-6">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-2xl font-semibold">Documents</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {pdfDocuments.map((doc) => (
            <div
              key={doc.url}
              className="overflow-hidden rounded-lg border bg-background"
            >
              <div className="border-b px-3 py-2 text-sm font-medium">{doc.name}</div>
              <iframe
                src={`/pdf-viewer.html?file=${encodeURIComponent(doc.url)}`}
                width="100%"
                height="400"
                style={{ border: "none" }}
                title={doc.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

