<script lang="ts">
	export let data;
	const { lang, i18nText } = data;
	let inputText = "";
	let items: string[] = [];
	let selectedItem = "";
	let isSpinning = false;

	function startRoulette() {
		if (inputText.trim() === "") return;

		items = inputText.split("\n").filter((line) => line.trim() !== "");
		selectedItem = selectedItem ? selectedItem : "";
		isSpinning = true;

		let spinCount = Math.floor(Math.random() * 10) + 20;
		let currentIndex = 0;

		const interval = setInterval(() => {
			selectedItem = items[currentIndex];
			currentIndex = (currentIndex + 1) % items.length;
			spinCount--;

			if (spinCount <= 0) {
				clearInterval(interval);
				isSpinning = false;
			}
		}, 100);
	}

	function adjustHeight(
		event: Event & {
			currentTarget: EventTarget & HTMLTextAreaElement;
		},
	) {
		const textarea = event.currentTarget;
		textarea.style.height = "auto";
		textarea.style.height = textarea.scrollHeight + "px";
	}
</script>

<svelte:head>
	<title>{i18nText.title} - Kodowg</title>
	<meta property="og:title" content="{i18nText.title} - Kodowg" />
</svelte:head>

<div
	class="mx-auto grid max-w-screen-lg grid-cols-1 gap-x-4 gap-y-6 px-4 py-8 md:grid-cols-5 lg:gap-x-8"
>
	<h1 class="col-span-full text-5xl font-bold">{i18nText.title}</h1>
	<div class="row-span-2 grid grid-rows-subgrid gap-y-3 md:col-span-2">
		<label for="textarea" class="grid content-start gap-y-1">
			<span class="text-2xl font-bold">{i18nText.itemList}</span>
			<span class="leading-tight text-slate-600"
				>{i18nText.itemListDescription}</span
			>
		</label>
		<div class="grid gap-y-5">
			<textarea
				id="textarea"
				rows="7"
				placeholder={i18nText.placeholder}
				class="rounded-md px-3 py-2"
				bind:value={inputText}
				on:input={adjustHeight}
			/>
			<button
				disabled={isSpinning}
				class="rounded-md bg-indigo-600 p-2 text-2xl font-bold text-white hover:bg-indigo-800 disabled:opacity-50"
				on:click={startRoulette}
			>
				{i18nText.start}
			</button>
		</div>
	</div>
	<div class="row-span-2 grid grid-rows-subgrid gap-y-3 md:col-span-3">
		<div class="grid content-start gap-y-1">
			<h2 class="text-2xl font-bold">{i18nText.result}</h2>
			<span class="leading-tight text-slate-600">
				{i18nText.resultDescription}
			</span>
		</div>
		<div id="result-display" class="grid min-h-24 rounded-md bg-slate-200 p-4">
			<p class="self-center text-center font-bold">
				{#if selectedItem}
					<span class="text-6xl md:text-8xl">{selectedItem}</span>
				{:else}
					<span class="text-3xl text-slate-500 md:text-4xl"
						>{i18nText.chosen}</span
					>
				{/if}
			</p>
		</div>
	</div>
	<a
		href="/{lang}"
		class="justify-self-start text-slate-600 underline underline-offset-2"
	>
		{i18nText.returnToTop}
	</a>
</div>
