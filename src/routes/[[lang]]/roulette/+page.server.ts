const i18nText = {
	en: {
		title: 'Roulette',
		result: 'Result',
		resultDescription: 'It will be displayed when you press the start button',
		chosen: 'The chosen one is...',
		itemList: 'Item list',
		itemListDescription: '(Please enter with line separation)',
		placeholder: 'Item names',
		start: 'Start',
		returnToTop: 'Return to top page'
	},
	ja: {
		title: 'ルーレット',
		result: '結果',
		resultDescription: 'スタートボタンを押すと表示されます',
		chosen: '選ばれたのは……',
		itemList: '候補リスト',
		itemListDescription: '（改行区切りで入力してください）',
		placeholder: '候補の名前',
		start: 'スタート',
		returnToTop: 'トップページに戻る'
	}
};

export function load({ params }: { params: { lang: 'en' | 'ja' } }) {
	return {
		lang: params.lang ?? 'en',
		i18nText: i18nText[params.lang ?? 'en']
	};
}
