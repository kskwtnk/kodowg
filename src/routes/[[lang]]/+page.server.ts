const i18nText = {
	en: {
		description:
			"Kodowg is a word inspired by the Japanese term “小道具” (which means “props”). We offer you nifty tools for those little tasks in life.",
		functionName: {
			"character-count": "Character Count",
			"qr-code-generator": "QR Code Generator",
			"random-order": "Random Order",
			roulette: "Roulette",
			timer: "Timer",
		},
		note: "This site has been tested for operation in the following environments:",
	},
	ja: {
		description:
			"Kodowgは日本語の「小道具」にインスパイアされた言葉です。日常のちょっとしたタスクに便利なツールを提供します。",
		functionName: {
			"character-count": "文字数カウント",
			"qr-code-generator": "QRコードジェネレーター",
			"random-order": "ランダム並び替え",
			roulette: "ルーレット",
			timer: "タイマー",
		},
		note: "このサイトは以下の環境で動作確認を行っています:",
	},
};

// i18nText.en.functionNameのキーからpagesを生成
const pages = Object.keys(
	i18nText.en.functionName,
) as (keyof typeof i18nText.en.functionName)[];

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		lang: params.lang ?? "en",
		i18nText: i18nText[params.lang ?? "en"],
		pages,
	};
}
