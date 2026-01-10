import type { MetaTagsProps } from "svelte-meta-tags";

const TITLE = "文字数カウント - Kodowg";
const DESCRIPTION =
	"Web上で使える無料の文字数カウントツール。入力と同時にリアルタイムで文字数をカウント。サーバー上にデータを保存しないため安心して利用できます。";

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
