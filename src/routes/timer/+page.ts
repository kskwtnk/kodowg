import type { MetaTagsProps } from "svelte-meta-tags";

const TITLE = "タイマー - Kodowg";
const DESCRIPTION =
	"Web上で使える無料のタイマーツール。時間を設定してカウントダウンを開始します。タイマーを一時停止、再開、キャンセルできます。サーバー上にデータを保存しないため安心して利用できます。";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: TITLE,
		description: DESCRIPTION,
		openGraph: {
			title: TITLE,
			description: DESCRIPTION,
		},
		twitter: {
			title: TITLE,
			description: DESCRIPTION,
		},
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags,
	};
};
