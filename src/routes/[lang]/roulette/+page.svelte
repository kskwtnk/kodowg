<script lang="ts">
	let { data } = $props();
	const { i18nText } = $derived(data);
	let inputText = $state("");
	let items: string[] = [];
	let selectedItem = $state("");
	let isSpinning = $state(false);

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

<div class="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-5 lg:gap-x-8">
	<h1 class="col-span-full text-5xl font-bold">{i18nText.title}</h1>
	<div class="row-span-2 grid grid-rows-subgrid gap-y-3 md:col-span-2">
		<label for="textarea" class="text-2xl font-bold">
			{i18nText.itemList}
		</label>
		<div class="grid gap-y-5">
			<textarea
				id="textarea"
				rows="7"
				placeholder={i18nText.placeholder}
				class="rounded-md bg-white px-3 py-2"
				bind:value={inputText}
				oninput={adjustHeight}
			></textarea>
			<button
				disabled={isSpinning}
				class="rounded-md bg-indigo-600 p-2 text-2xl font-bold text-white hover:bg-indigo-800 disabled:opacity-50"
				onclick={startRoulette}
			>
				{i18nText.start}
			</button>
		</div>
	</div>
	<div class="row-span-2 grid grid-rows-subgrid gap-y-3 md:col-span-3">
		<h2 class="text-2xl font-bold">{i18nText.result}</h2>
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
	<hr class="col-span-full mt-1.5 border-t-slate-200 border-b-white" />
	<div class="col-span-full grid gap-y-2">
		<h2 class="text-2xl font-bold">{i18nText.howToUse}</h2>
		<ol class="list-decimal pl-6">
			{#each i18nText.steps as step}
				<li>{step}</li>
			{/each}
		</ol>
	</div>
</div>
