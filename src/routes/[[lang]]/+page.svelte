<script lang="ts">
	import characterCountImage from "$lib/assets/character-count.png?enhanced";
	import rouletteImage from "$lib/assets/roulette.png?enhanced";
	import timerImage from "$lib/assets/timer.png?enhanced";

	let { data } = $props();
	const { lang, i18nText } = data;
</script>

<svelte:head>
	<title>Kodowg</title>
	<meta property="og:title" content="Kodowg" />
</svelte:head>

<div class="grid grid-cols-1 gap-y-9">
	<div class="grid grid-cols-subgrid gap-y-6">
		<h1 class="text-5xl font-bold">Kodowg</h1>
		<div>
			<p>{i18nText.description}</p>
		</div>
		<div class="flex flex-wrap gap-x-6 gap-y-4">
			<a
				href="./{lang}/character-count"
				class="flex flex-grow flex-col items-center justify-center gap-y-2 rounded-md bg-slate-200 px-6 pb-6 pt-4 transition-colors duration-75 hover:bg-white"
			>
				<enhanced:img
					alt=""
					src={characterCountImage}
					class="size-full h-auto max-w-64"
				/>
				<span class="font-bold">{i18nText.functionName.characterCount}</span>
			</a>
			<a
				href="./{lang}/roulette"
				class="flex flex-grow flex-col items-center justify-center gap-y-2 rounded-md bg-slate-200 px-6 pb-6 pt-4 transition-colors duration-75 hover:bg-white"
			>
				<enhanced:img
					alt=""
					src={rouletteImage}
					class="size-full h-auto max-w-64"
				/>
				<span class="font-bold">{i18nText.functionName.roulette}</span>
			</a>
			<a
				href="./{lang}/timer"
				class="flex flex-grow flex-col items-center justify-center gap-y-2 rounded-md bg-slate-200 px-6 pb-6 pt-4 transition-colors duration-75 hover:bg-white"
			>
				<enhanced:img
					alt=""
					src={timerImage}
					class="size-full h-auto max-w-64"
				/>
				<span class="font-bold">{i18nText.functionName.timer}</span>
			</a>
		</div>
	</div>
	<div class="grid gap-y-4 rounded-md">
		<p>{i18nText.note}</p>
		<ul class="list-disc pl-5">
			<li>
				OS
				<ul class="list-circle pl-5">
					<li>macOS</li>
				</ul>
			</li>
			<li>
				{i18nText.browser}
				<ul class="list-circle pl-5">
					<li>Google Chrome</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
