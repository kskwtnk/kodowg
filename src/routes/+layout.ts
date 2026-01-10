import type { MetaTagsProps } from "svelte-meta-tags";
import type { LayoutLoad } from "./$types";

const TITLE = "Kodowg";
const DESCRIPTION =
	"Kodowgは日本語の「小道具」にインスパイアされた言葉です。日常のちょっとしたタスクに便利なツールを提供します。";
const OG_IMAGE_PATH = "/og-image.jpg";
const TWITTER_HANDLE = "@kskwtnk";

export const load: LayoutLoad = ({ url }) => {
	const baseMetaTags = Object.freeze({
		title: TITLE,
		description: DESCRIPTION,
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: "website",
			url: new URL(url.pathname, url.origin).href,
			locale: "ja_JP",
			title: TITLE,
			description: DESCRIPTION,
			siteName: TITLE,
			images: [
				{
					url: `${url.origin}${OG_IMAGE_PATH}`,
					alt: TITLE,
					width: 1200,
					height: 630,
					secureUrl: `${url.origin}${OG_IMAGE_PATH}`,
					type: "image/jpeg",
				},
			],
		},
		twitter: {
			creator: TWITTER_HANDLE,
			site: TWITTER_HANDLE,
			cardType: "summary_large_image" as const,
			title: TITLE,
			description: DESCRIPTION,
			image: `${url.origin}${OG_IMAGE_PATH}`,
			imageAlt: TITLE,
		},
	}) satisfies MetaTagsProps;

	return {
		baseMetaTags,
	};
};
