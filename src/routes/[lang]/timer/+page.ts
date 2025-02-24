const i18nText = {
	en: {
		title: "Timer",
		description:
			"Free Web-based countdown timer with pause, resume, and cancel functions. Set your time and start counting down. No data stored on servers - simple and secure to use.",
		minutes: "min",
		seconds: "sec",
		start: "Start",
		pause: "Pause",
		resume: "Resume",
		cancel: "Cancel",
		howToUse: "How to Use",
		steps: [
			"Enter the desired time (minutes and seconds)",
			"Click the Start button to begin the countdown",
			"Press Pause to stop at the current time, or Cancel to reset to 0 seconds",
		],
	},
	ja: {
		title: "タイマー",
		description:
			"Web上で使える無料のタイマーツール。時間を設定してカウントダウンを開始します。タイマーを一時停止、再開、キャンセルできます。サーバー上にデータを保存しないため安心して利用できます。",
		minutes: "分",
		seconds: "秒",
		start: "スタート",
		pause: "一時停止",
		resume: "再開",
		cancel: "キャンセル",
		howToUse: "使い方",
		steps: [
			"計りたい時間（分、秒）を入力します",
			"スタートボタンを押すとカウントダウンが始まります",
			"一時停止をすると今の秒数のまま止まり、停止を押すと0秒に戻ります",
		],
	},
};

export function load({ params }: { params: { lang: "en" | "ja" } }) {
	return {
		i18nText: i18nText[params.lang ?? "en"],
	};
}
