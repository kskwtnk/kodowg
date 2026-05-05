import type { MetaTagsProps } from "svelte-meta-tags";

const TITLE = "QRコードジェネレーター - Kodowg";
const DESCRIPTION =
	"Web上で使える無料のQRコードを生成ツール。QRコードをPNGまたはSVGファイルとしてダウンロードできます。サーバー上にデータを保存しないため安心して利用できます。";

export const load = () => {
	const pageMetaTags = Object.freeze({
		description: DESCRIPTION,
		openGraph: {
			description: DESCRIPTION,
			title: TITLE,
		},
		title: TITLE,
		twitter: {
			description: DESCRIPTION,
			title: TITLE,
		},
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags,
	};
};
