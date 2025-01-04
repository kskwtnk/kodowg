const i18nText = {
	en: {
		title: "Character Count",
		description:
			"Free browser-based character counter that counts instantly as you type. No data stored on servers - your text remains private and secure.",
		characters: "Characters",
		textToCount: "Text to count",
		placeholder: "Please enter text",
	},
	ja: {
		title: "文字数カウント",
		description:
			"ブラウザ上で使える無料の文字数カウントツール。入力と同時にリアルタイムで文字数をカウント。サーバー上にデータを保存しないため安心して利用できます。",
		characters: "文字数",
		textToCount: "カウントするテキスト",
		placeholder: "入力してください",
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		i18nText: i18nText[params.lang ?? "en"],
	};
}
