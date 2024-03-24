const i18nText = {
	en: {
		title: 'Character Count',
		characters: 'Characters',
		textToCount: 'Text to count',
		placeholder: 'Please enter text',
		returnToTop: 'Return to top page'
	},
	ja: {
		title: '文字数カウント',
		characters: '文字数',
		textToCount: 'カウントするテキスト',
		placeholder: '入力してください',
		returnToTop: 'トップページに戻る'
	}
};

export function load({ params }: { params: { lang: 'en' | 'ja' } }) {
	return {
		lang: params.lang ?? 'en',
		i18nText: i18nText[params.lang ?? 'en']
	};
}
