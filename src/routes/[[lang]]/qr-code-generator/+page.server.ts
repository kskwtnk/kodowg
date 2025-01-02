const i18nText = {
	en: {
		title: "QR Code Generator",
		convertText: "Text to convert",
		placeholder: "Enter text",
		size: "Size",
		fileFormat: "File format",
		download: "Download",
		generatedQRCode: "Generated QR Code",
		returnToTop: "Return to top page",
	},
	ja: {
		title: "QRコードジェネレーター",
		convertText: "変換するテキスト",
		placeholder: "テキストを入力",
		size: "サイズ",
		fileFormat: "ファイル形式",
		download: "ダウンロード",
		generatedQRCode: "生成されたQRコード",
		returnToTop: "トップページに戻る",
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		lang: params.lang ?? "en",
		i18nText: i18nText[params.lang ?? "en"],
	};
}
