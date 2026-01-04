import type { MetaTagsProps } from "svelte-meta-tags";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: "グループ分け - Kodowg",
		description:
			"Web上で使える無料のグループ分けツール。入力したリストをシャッフルして、指定された数のグループに均等に分けます。サーバー上にデータを保存しないため安心して利用できます。",
		openGraph: {
			title: "グループ分け - Kodowg",
			description:
				"Web上で使える無料のグループ分けツール。入力したリストをシャッフルして、指定された数のグループに均等に分けます。サーバー上にデータを保存しないため安心して利用できます。",
		},
		twitter: {
			title: "グループ分け - Kodowg",
			description:
				"Web上で使える無料のグループ分けツール。入力したリストをシャッフルして、指定された数のグループに均等に分けます。サーバー上にデータを保存しないため安心して利用できます。",
		},
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags,
	};
};
