const i18nText = {
	en: {
		title: "QR Code Generator",
		description:
			"Free browser-based QR code generator. Download your QR codes as PNG or SVG files. No data stored on servers - your information remains private and secure.",
		convertText: "Text to convert",
		placeholder: "Enter text",
		size: "Size",
		fileFormat: "File format",
		download: "Download",
		generatedQRCode: "Generated QR Code",
	},
	ja: {
		title: "QRコードジェネレーター",
		description:
			"ブラウザ上で使える無料のQRコードを生成ツール。QRコードをPNGまたはSVGファイルとしてダウンロードできます。サーバー上にデータを保存しないため安心して利用できます。",
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
