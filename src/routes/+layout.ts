import type { MetaTagsProps } from "svelte-meta-tags";
import type { LayoutLoad } from "./$types";

const TITLE = "Kodowg";
const DESCRIPTION =
	"Kodowgは日本語の「小道具」にインスパイアされた言葉です。日常のちょっとしたタスクに便利なツールを提供します。";
const OG_IMAGE_PATH = "/og-image.jpg";
const TWITTER_HANDLE = "@kskwtnk";

export const load: LayoutLoad = ({ url }) => {
	const baseMetaTags = Object.freeze({
		canonical: new URL(url.pathname, url.origin).href,
		description: DESCRIPTION,
		openGraph: {
			description: DESCRIPTION,
			images: [
				{
					alt: TITLE,
					height: 630,
					secureUrl: `${url.origin}${OG_IMAGE_PATH}`,
					type: "image/jpeg",
					url: `${url.origin}${OG_IMAGE_PATH}`,
					width: 1200,
				},
			],
			locale: "ja_JP",
			siteName: TITLE,
			title: TITLE,
			type: "website",
			url: new URL(url.pathname, url.origin).href,
		},
		title: TITLE,
		twitter: {
			cardType: "summary_large_image" as const,
			creator: TWITTER_HANDLE,
			description: DESCRIPTION,
			image: `${url.origin}${OG_IMAGE_PATH}`,
			imageAlt: TITLE,
			site: TWITTER_HANDLE,
			title: TITLE,
		},
	}) satisfies MetaTagsProps;

	return {
		baseMetaTags,
	};
};
