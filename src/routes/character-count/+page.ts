import type { MetaTagsProps } from "svelte-meta-tags";

export const load = () => {
	const pageMetaTags = Object.freeze({
		title: "文字数カウント - Kodowg",
		description:
			"Web上で使える無料の文字数カウントツール。入力と同時にリアルタイムで文字数をカウント。サーバー上にデータを保存しないため安心して利用できます。",
		openGraph: {
			title: "文字数カウント - Kodowg",
			description:
				"Web上で使える無料の文字数カウントツール。入力と同時にリアルタイムで文字数をカウント。サーバー上にデータを保存しないため安心して利用できます。",
		},
		twitter: {
			title: "文字数カウント - Kodowg",
			description:
				"Web上で使える無料の文字数カウントツール。入力と同時にリアルタイムで文字数をカウント。サーバー上にデータを保存しないため安心して利用できます。",
		},
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags,
	};
};
