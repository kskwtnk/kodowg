<script lang="ts">
	let inputText = $state("");
	let items: string[] = [];
	let shuffledItems = $state<string[]>([]);
	let isSpinning = $state(false);

	function startShuffle() {
		if (inputText.trim() === "") return;

		isSpinning = true;
		items = inputText.split("\n").filter((line) => line.trim() !== "");

		let spinCount = Math.floor(Math.random() * 10) + 20;
		let tempArray = [...items];

		const interval = setInterval(() => {
			for (let i = tempArray.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
			}
			shuffledItems = [...tempArray];

			spinCount--;
			if (spinCount <= 0) {
				clearInterval(interval);
				const finalArray = [...items];
				for (let i = finalArray.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[finalArray[i], finalArray[j]] = [finalArray[j], finalArray[i]];
				}
				shuffledItems = finalArray;
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
	<h1 class="col-span-full text-5xl font-bold">ランダム並び替え</h1>
	<div class="row-span-2 grid grid-rows-subgrid gap-y-3 md:col-span-2">
		<label for="textarea" class="text-2xl font-bold"> 候補リスト</label>
		<div class="grid gap-y-5">
			<textarea
				id="textarea"
				rows="7"
				placeholder="候補の名前"
				class="rounded-md bg-white px-3 py-2"
				bind:value={inputText}
				oninput={adjustHeight}
			></textarea>
			<button
				disabled={isSpinning}
				class="rounded-md bg-indigo-600 p-2 text-2xl font-bold text-white hover:bg-indigo-800 disabled:opacity-50"
				onclick={startShuffle}
			>
				シャッフル
			</button>
		</div>
	</div>
	<div class="row-span-2 grid grid-rows-subgrid gap-y-3 md:col-span-3">
		<h2 class="text-2xl font-bold">結果</h2>
		<div id="result-display" class="grid rounded-md bg-slate-200 p-4">
			{#if shuffledItems.length > 0}
				<ol class="list-decimal pl-8">
					{#each shuffledItems as item (item)}
						<li class="my-2 text-2xl font-bold">{item}</li>
					{/each}
				</ol>
			{:else}
				<p class="self-center text-center font-bold">
					<span class="text-3xl text-slate-500 md:text-4xl"> 順番は…… </span>
				</p>
			{/if}
		</div>
	</div>
	<hr class="col-span-full mt-1.5 border-t-slate-200 border-b-white" />
	<div class="col-span-full grid gap-y-2">
		<h2 class="text-2xl font-bold">使い方</h2>
		<ol class="list-decimal pl-6">
			<li>テキストエリアにテキストを改行区切りで入力します</li>
			<li>シャッフルボタンを押します</li>
			<li>結果のエリアに並び替え後のテキストが表示されます</li>
		</ol>
	</div>
</div>
