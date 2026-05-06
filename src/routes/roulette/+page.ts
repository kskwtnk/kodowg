import type { MetaTagsProps } from "svelte-meta-tags";

const TITLE = "ルーレット - Kodowg";
const DESCRIPTION =
	"Web上で使える無料のルーレットツール。要素を改行区切りで入力してスタートボタンを押すと、ランダムに1つ選ばれます。サーバー上にデータを保存しないため安心して利用できます。";

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
