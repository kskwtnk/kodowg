import type { MetaTagsProps } from "svelte-meta-tags";

const TITLE = "ランダム並び替え - Kodowg";
const DESCRIPTION =
	"Web上で使える無料のランダム並び替えツール。入力したアイテムをランダムに並び替え。サーバー上にデータを保存しないため安心して利用できます。";

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
