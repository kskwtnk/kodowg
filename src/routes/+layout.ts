import type { MetaTagsProps } from "svelte-meta-tags";

export const load = ({ url }) => {
	const baseMetaTags = Object.freeze({
		title: "Kodowg",
		description:
			"Kodowgは日本語の「小道具」にインスパイアされた言葉です。日常のちょっとしたタスクに便利なツールを提供します。",
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: "website",
			url: new URL(url.pathname, url.origin).href,
			locale: "ja_JP",
			title: "Kodowg",
			description:
				"Kodowgは日本語の「小道具」にインスパイアされた言葉です。日常のちょっとしたタスクに便利なツールを提供します。",
			siteName: "Kodowg",
			images: [
				{
					url: `${url.origin}/og-image.jpg`,
					alt: "Kodowg",
					width: 1200,
					height: 630,
					secureUrl: `${url.origin}/og-image.jpg`,
					type: "image/jpeg",
				},
			],
		},
		twitter: {
			creator: "@kskwtnk",
			site: "@kskwtnk",
			cardType: "summary_large_image" as const,
			title: "Kodowg",
			description:
				"Kodowgは日本語の「小道具」にインスパイアされた言葉です。日常のちょっとしたタスクに便利なツールを提供します。",
			image: `${url.origin}/og-image.jpg`,
			imageAlt: "Kodowg",
		},
	}) satisfies MetaTagsProps;

	return {
		baseMetaTags,
	};
};
