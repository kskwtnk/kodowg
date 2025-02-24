const i18nText = {
	en: {
		title: "Character Count",
		description:
			"Free Web-based character counter that counts instantly as you type. No data stored on servers - your text remains private and secure.",
		characters: "Characters",
		textToCount: "Text to count",
		placeholder: "Please enter text",
		howToUse: "How to Use",
		steps: [
			"Enter text in the text area",
			"The character count will be displayed in the Characters area",
			"The count updates in real-time as you edit the text",
		],
	},
	ja: {
		title: "文字数カウント",
		description:
			"Web上で使える無料の文字数カウントツール。入力と同時にリアルタイムで文字数をカウント。サーバー上にデータを保存しないため安心して利用できます。",
		characters: "文字数",
		textToCount: "カウントするテキスト",
		placeholder: "入力してください",
		howToUse: "使い方",
		steps: [
			"テキストエリアに文字を入力します",
			"文字数のエリアに文字数が表示されます",
			"テキストエリアの文字を編集するたびにリアルタイムで文字数が更新されます",
		],
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		i18nText: i18nText[params.lang ?? "en"],
	};
}
