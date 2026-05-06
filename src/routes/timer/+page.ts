import type { MetaTagsProps } from "svelte-meta-tags";

const TITLE = "タイマー - Kodowg";
const DESCRIPTION =
	"Web上で使える無料のタイマーツール。時間を設定してカウントダウンを開始します。タイマーを一時停止、再開、キャンセルできます。サーバー上にデータを保存しないため安心して利用できます。";

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
