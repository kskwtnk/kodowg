import { supportText } from "$lib/i18n/support";

const i18nText = {
	en: {
		author: "Keisuke Watanuki",
		...supportText.en,
	},
	ja: {
		author: "綿貫 佳祐",
		...supportText.ja,
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		lang: params.lang ?? "en",
		i18nText: i18nText[params.lang ?? "en"],
	};
}
