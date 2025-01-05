const i18nText = {
	en: {
		title: "Roulette",
		description:
			"Free browser-based roulette decision maker. Enter your options line by line and spin to randomly select one item. No data stored on servers - your choices remain private.",
		result: "Result",
		resultDescription: "It will be displayed when you press the start button",
		chosen: "The chosen one is...",
		itemList: "Item list",
		itemListDescription: "Please enter with line separation",
		placeholder: "Item names",
		start: "Start",
	},
	ja: {
		title: "ルーレット",
		description:
			"ブラウザ上で使える無料のルーレットツール。要素を改行区切りで入力してスタートボタンを押すと、ランダムに1つ選ばれます。サーバー上にデータを保存しないため安心して利用できます。",
		result: "結果",
		resultDescription: "スタートボタンを押すと表示されます",
		chosen: "選ばれたのは……",
		itemList: "候補リスト",
		itemListDescription: "改行区切りで入力してください",
		placeholder: "候補の名前",
		start: "スタート",
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		i18nText: i18nText[params.lang ?? "en"],
	};
}
