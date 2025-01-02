const i18nText = {
	en: {
		title: "QR Code Generator",
		convertText: "Text to convert",
		placeholder: "Enter text",
		size: "Size",
		fileFormat: "File format",
		download: "Download",
		generatedQRCode: "Generated QR Code",
	},
	ja: {
		title: "QRコードジェネレーター",
		convertText: "変換するテキスト",
		placeholder: "テキストを入力",
		size: "サイズ",
		fileFormat: "ファイル形式",
		download: "ダウンロード",
		generatedQRCode: "生成されたQRコード",
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		i18nText: i18nText[params.lang ?? "en"],
	};
}
