const i18nText = {
	en: {
		title: "Random Order",
		description:
			"Free Web-based list randomizer tool. Instantly shuffle and reorder your items in a random sequence. No data stored on servers - your information remains private.",
		result: "Result",
		waiting: "The order is...",
		itemList: "Item list",
		placeholder: "Item names",
		shuffle: "Shuffle",
		howToUse: "How to Use",
		steps: [
			"Enter text items in the text area, separated by line breaks",
			"Click the Shuffle button",
			"The reordered text will be displayed in the Result area",
		],
	},
	ja: {
		title: "ランダム並び替え",
		description:
			"Web上で使える無料のランダム並び替えツール。入力したアイテムをランダムに並び替え。サーバー上にデータを保存しないため安心して利用できます。",
		result: "結果",
		waiting: "順番は……",
		itemList: "候補リスト",
		placeholder: "候補の名前",
		shuffle: "シャッフル",
		howToUse: "使い方",
		steps: [
			"テキストエリアにテキストを改行区切りで入力します",
			"シャッフルボタンを押します",
			"結果のエリアに並び替え後のテキストが表示されます",
		],
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		i18nText: i18nText[params.lang ?? "en"],
	};
}
