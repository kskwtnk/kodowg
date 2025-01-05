const i18nText = {
	en: {
		title: "Timer",
		description:
			"Free browser-based countdown timer with pause, resume, and cancel functions. Set your time and start counting down. No data stored on servers - simple and secure to use.",
		minutes: "min",
		seconds: "sec",
		start: "Start",
		pause: "Pause",
		resume: "Resume",
		cancel: "Cancel",
	},
	ja: {
		title: "タイマー",
		description:
			"ブラウザ上で使える無料のタイマーツール。時間を設定してカウントダウンを開始します。タイマーを一時停止、再開、キャンセルできます。サーバー上にデータを保存しないため安心して利用できます。",
		minutes: "分",
		seconds: "秒",
		start: "スタート",
		pause: "一時停止",
		resume: "再開",
		cancel: "キャンセル",
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		i18nText: i18nText[params.lang ?? "en"],
	};
}
