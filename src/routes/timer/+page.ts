import type { MetaTagsProps } from "svelte-meta-tags";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: "タイマー - Kodowg",
		description:
			"Web上で使える無料のタイマーツール。時間を設定してカウントダウンを開始します。タイマーを一時停止、再開、キャンセルできます。サーバー上にデータを保存しないため安心して利用できます。",
		openGraph: {
			title: "タイマー - Kodowg",
			description:
				"Web上で使える無料のタイマーツール。時間を設定してカウントダウンを開始します。タイマーを一時停止、再開、キャンセルできます。サーバー上にデータを保存しないため安心して利用できます。",
		},
		twitter: {
			title: "タイマー - Kodowg",
			description:
				"Web上で使える無料のタイマーツール。時間を設定してカウントダウンを開始します。タイマーを一時停止、再開、キャンセルできます。サーバー上にデータを保存しないため安心して利用できます。",
		},
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags,
	};
};
