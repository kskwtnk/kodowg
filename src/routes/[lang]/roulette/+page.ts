const i18nText = {
	en: {
		title: "Roulette",
		description:
			"Free Web-based roulette decision maker. Enter your options line by line and spin to randomly select one item. No data stored on servers - your choices remain private.",
		result: "Result",
		chosen: "The chosen one is...",
		itemList: "Item list",
		placeholder: "Item names",
		start: "Start",
		howToUse: "How to Use",
		steps: [
			"Enter text items in the text area, separated by line breaks",
			"Click the Start button",
			"One item will be randomly selected and displayed in the result area",
		],
	},
	ja: {
		title: "ルーレット",
		description:
			"Web上で使える無料のルーレットツール。要素を改行区切りで入力してスタートボタンを押すと、ランダムに1つ選ばれます。サーバー上にデータを保存しないため安心して利用できます。",
		result: "結果",
		chosen: "選ばれたのは……",
		itemList: "候補リスト",
		placeholder: "候補の名前",
		start: "スタート",
		howToUse: "使い方",
		steps: [
			"テキストエリアにテキストを改行区切りで入力します",
			"スタートボタンを押します",
			"結果のエリアにランダムで1つ表示されます",
		],
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		i18nText: i18nText[params.lang ?? "en"],
	};
}
