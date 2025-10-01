import { NextResponse } from "next/server";

const baseUrl = "https://skoragents.ai";

const pages = [
  { loc: "/", priority: "1.00" },
  { loc: "/privacy-policy", priority: "0.80" },
  { loc: "/terms-and-conditions", priority: "0.80" },
];

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        ({ loc, priority }) => `
    <url>
      <loc>${baseUrl}${loc}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>${priority}</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}