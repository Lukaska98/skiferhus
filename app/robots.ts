export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://skiferhus.no/sitemap.xml",
  };
}