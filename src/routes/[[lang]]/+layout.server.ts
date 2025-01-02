import { supportText } from "$lib/i18n/support";

const i18nText = {
	en: {
		author: "Keisuke Watanuki",
		description:
			"Kodowg is a word inspired by the Japanese term “小道具” (which means “props”). We offer you nifty tools for those little tasks in life.",
		...supportText.en,
	},
	ja: {
		author: "綿貫 佳祐",
		description:
			"Kodowgは日本語の「小道具」にインスパイアされた言葉です。日常のちょっとしたタスクに便利なツールを提供します。",
		...supportText.ja,
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		lang: params.lang ?? "en",
		i18nText: i18nText[params.lang ?? "en"],
	};
}
