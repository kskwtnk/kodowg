const pages = [
	"",
	"/character-count",
	"/qr-code-generator",
	"/random-order",
	"/roulette",
	"/timer",
];

const languages = ["en", "ja"];

export async function GET() {
	const headers = {
		"Content-Type": "application/xml",
	};

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${languages
				.map((lang) =>
					pages
						.map(
							(page) =>
								`<url><loc>https://kodowg.kskwtnk.com/${lang}${page}</loc></url>`,
						)
						.join(""),
				)
				.join("")}
    </urlset>`;

	return new Response(sitemap, { headers });
}
