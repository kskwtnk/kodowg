const i18nText = {
	en: {
		title: "QR Code Generator",
		description:
			"Free Web-based QR code generator. Download your QR codes as PNG or SVG files. No data stored on servers - your information remains private and secure.",
		convertText: "Text to convert",
		placeholder: "Enter text",
		size: "Size",
		fileFormat: "File format",
		download: "Download",
		generatedQRCode: "Generated QR Code",
		howToUse: "How to Use",
		steps: [
			"Enter the text (such as URLs) you want to convert in the text area",
			"Select the size of the QR code to generate",
			"Choose the image file format",
			"Click the download button to download your file",
		],
	},
	ja: {
		title: "QRコードジェネレーター",
		description:
			"Web上で使える無料のQRコードを生成ツール。QRコードをPNGまたはSVGファイルとしてダウンロードできます。サーバー上にデータを保存しないため安心して利用できます。",
		convertText: "変換するテキスト",
		placeholder: "テキストを入力",
		size: "サイズ",
		fileFormat: "ファイル形式",
		download: "ダウンロード",
		generatedQRCode: "生成されたQRコード",
		howToUse: "使い方",
		steps: [
			"テキストエリアに変換したい文字（URLなど）を入力します",
			"生成するQRコードのサイズを選択します",
			"画像の拡張子を選択します",
			"ダウンロードボタンを押してファイルをダウンロードします",
		],
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		i18nText: i18nText[params.lang ?? "en"],
	};
}
