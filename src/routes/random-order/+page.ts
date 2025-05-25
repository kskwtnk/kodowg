import type { MetaTagsProps } from "svelte-meta-tags";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: "ランダム並び替え - Kodowg",
		description:
			"Web上で使える無料のランダム並び替えツール。入力したアイテムをランダムに並び替え。サーバー上にデータを保存しないため安心して利用できます。",
		openGraph: {
			title: "ランダム並び替え - Kodowg",
			description:
				"Web上で使える無料のランダム並び替えツール。入力したアイテムをランダムに並び替え。サーバー上にデータを保存しないため安心して利用できます。",
		},
		twitter: {
			title: "ランダム並び替え - Kodowg",
			description:
				"Web上で使える無料のランダム並び替えツール。入力したアイテムをランダムに並び替え。サーバー上にデータを保存しないため安心して利用できます。",
		},
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags,
	};
};
