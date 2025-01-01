const i18nText = {
	en: {
		title: "Random Order",
		result: "Result",
		resultDescription: "It will be displayed when you press the shuffle button",
		waiting: "The order is...",
		itemList: "Item list",
		itemListDescription: "(Please enter with line separation)",
		placeholder: "Item names",
		shuffle: "Shuffle",
		returnToTop: "Return to top page",
	},
	ja: {
		title: "ランダム並び替え",
		result: "結果",
		resultDescription: "シャッフルボタンを押すと表示されます",
		waiting: "順番は……",
		itemList: "候補リスト",
		itemListDescription: "（改行区切りで入力してください）",
		placeholder: "候補の名前",
		shuffle: "シャッフル",
		returnToTop: "トップページに戻る",
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		lang: params.lang ?? "en",
		i18nText: i18nText[params.lang ?? "en"],
	};
}
