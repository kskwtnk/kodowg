const i18nText = {
	en: {
		title: "Timer",
		minutes: "min",
		seconds: "sec",
		start: "Start",
		pause: "Pause",
		resume: "Resume",
		cancel: "Cancel",
	},
	ja: {
		title: "タイマー",
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
