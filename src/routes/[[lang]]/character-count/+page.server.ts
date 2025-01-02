const i18nText = {
	en: {
		title: "Character Count",
		characters: "Characters",
		textToCount: "Text to count",
		placeholder: "Please enter text",
	},
	ja: {
		title: "文字数カウント",
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
