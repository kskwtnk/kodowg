const i18nText = {
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
};

// Generate pages from keys of i18nText.en.functionName
const pages = Object.keys(
	i18nText.functionName,
) as (keyof typeof i18nText.functionName)[];

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		lang: params.lang ?? "en",
		i18nText: i18nText,
		pages,
	};
}
