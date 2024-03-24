const i18nText = {
	en: {
		description:
			"Kodowg is a word inspired by the Japanese term “小道具” (which means “props”). We offer you nifty tools for those little tasks in life.",
	},
	ja: {
		description:
			"Kodowgは日本語の「小道具」にインスパイアされた言葉です。日常のちょっとしたタスクに便利なツールを提供します。",
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		lang: params.lang ?? "en",
		i18nText: i18nText[params.lang ?? "en"],
	};
}
