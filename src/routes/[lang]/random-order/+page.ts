const i18nText = {
	en: {
		title: "Random Order",
		description:
			"Free browser-based list randomizer tool. Instantly shuffle and reorder your items in a random sequence. No data stored on servers - your information remains private.",
		result: "Result",
		resultDescription: "It will be displayed when you press the shuffle button",
		waiting: "The order is...",
		itemList: "Item list",
		itemListDescription: "Please enter with line separation",
		placeholder: "Item names",
		shuffle: "Shuffle",
	},
	ja: {
		title: "ランダム並び替え",
		description:
			"ブラウザ上で使える無料のランダム並び替えツール。入力したアイテムをランダムに並び替え。サーバー上にデータを保存しないため安心して利用できます。",
		result: "結果",
		resultDescription: "シャッフルボタンを押すと表示されます",
		waiting: "順番は……",
		itemList: "候補リスト",
		itemListDescription: "改行区切りで入力してください",
		placeholder: "候補の名前",
		shuffle: "シャッフル",
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		i18nText: i18nText[params.lang ?? "en"],
	};
}
