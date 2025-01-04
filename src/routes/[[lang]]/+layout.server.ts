const i18nText = {
	en: {
		author: "Keisuke Watanuki",
		support: {
			description:
				"This project operates without advertisements, relying solely on user support. While many web services depend on advertising revenue, we are exploring the possibility of a sustainable model through voluntary user support.",
			cta: "If you find this site useful, we would greatly appreciate your support through",
			closing: " for your consideration.",
		},
	},
	ja: {
		author: "綿貫 佳祐",
		support: {
			description:
				"このサイトは、広告を掲載せずユーザーの皆様からの支援のみで運営を試みるプロジェクトです。多くのウェブサービスが広告収入に依存する中、ユーザーの皆様の自発的な支援による持続可能なモデルの可能性を探っています。",
			cta: "もし当サイトが有用だと感じていただけましたら、",
			closing: "を通じてのご支援をご検討いただければ幸いです。",
		},
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		lang: params.lang ?? "en",
		i18nText: i18nText[params.lang ?? "en"],
	};
}
