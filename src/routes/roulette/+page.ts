import type { MetaTagsProps } from "svelte-meta-tags";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: "ルーレット - Kodowg",
		description:
			"Web上で使える無料のルーレットツール。要素を改行区切りで入力してスタートボタンを押すと、ランダムに1つ選ばれます。サーバー上にデータを保存しないため安心して利用できます。",
		openGraph: {
			title: "ルーレット - Kodowg",
			description:
				"Web上で使える無料のルーレットツール。要素を改行区切りで入力してスタートボタンを押すと、ランダムに1つ選ばれます。サーバー上にデータを保存しないため安心して利用できます。",
		},
		twitter: {
			title: "ルーレット - Kodowg",
			description:
				"Web上で使える無料のルーレットツール。要素を改行区切りで入力してスタートボタンを押すと、ランダムに1つ選ばれます。サーバー上にデータを保存しないため安心して利用できます。",
		},
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags,
	};
};
