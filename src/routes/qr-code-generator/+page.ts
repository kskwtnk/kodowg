import type { MetaTagsProps } from "svelte-meta-tags";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: "QRコードジェネレーター - Kodowg",
		description:
			"Web上で使える無料のQRコードを生成ツール。QRコードをPNGまたはSVGファイルとしてダウンロードできます。サーバー上にデータを保存しないため安心して利用できます。",
		openGraph: {
			title: "QRコードジェネレーター - Kodowg",
			description:
				"Web上で使える無料のQRコードを生成ツール。QRコードをPNGまたはSVGファイルとしてダウンロードできます。サーバー上にデータを保存しないため安心して利用できます。",
		},
		twitter: {
			title: "QRコードジェネレーター - Kodowg",
			description:
				"Web上で使える無料のQRコードを生成ツール。QRコードをPNGまたはSVGファイルとしてダウンロードできます。サーバー上にデータを保存しないため安心して利用できます。",
		},
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags,
	};
};
