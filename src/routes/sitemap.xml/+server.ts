const pages = [
	"character-count",
	"qr-code-generator",
	"random-order",
	"roulette",
	"timer",
];

export async function GET() {
	const headers = {
		"Content-Type": "application/xml",
	};

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<url><loc>https://kodowg.kskwtnk.com/</loc></url>
      ${pages
				.map(
					(page) => `<url><loc>https://kodowg.kskwtnk.com/${page}</loc></url>`,
				)
				.join("")}
    </urlset>`;

	return new Response(sitemap, { headers });
}
