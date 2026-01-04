<script lang="ts">
	let inputText = $state("");
	let groupCount = $state(2);
	let groups = $state<string[][]>([]);
	let isProcessing = $state(false);

	function divideIntoGroups() {
		if (inputText.trim() === "" || groupCount < 1) return;

		isProcessing = true;

		const items = inputText
			.split("\n")
			.map((line) => line.trim())
			.filter((line) => line !== "");

		// Fisher-Yates shuffle
		for (let i = items.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[items[i], items[j]] = [items[j], items[i]];
		}

		const newGroups: string[][] = Array.from({ length: groupCount }, () => []);
		items.forEach((item, index) => {
			newGroups[index % groupCount].push(item);
		});

		groups = newGroups;
		isProcessing = false;
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
	<h1 class="col-span-full text-5xl font-bold">グループ分け</h1>
	<div class="grid gap-y-5 md:col-span-2">
		<div class="grid gap-y-5 self-start">
			<div class="grid auto-rows-max gap-y-3">
				<label for="textarea" class="text-2xl font-bold">候補リスト</label>
				<textarea
					id="textarea"
					rows="7"
					placeholder="候補の名前"
					class="w-full rounded-md bg-white px-3 py-2"
					bind:value={inputText}
					oninput={adjustHeight}
				></textarea>
			</div>
			<div class="grid auto-rows-max gap-y-3">
				<label for="group-count" class="text-2xl font-bold">グループ数</label>
				<input
					type="number"
					id="group-count"
					min="1"
					class="w-full rounded-md bg-white px-3 py-2"
					bind:value={groupCount}
				/>
			</div>
			<button
				disabled={isProcessing}
				class="rounded-md bg-indigo-600 p-2 text-2xl font-bold text-white hover:bg-indigo-800 disabled:opacity-50"
				onclick={divideIntoGroups}
			>
				グループ分け
			</button>
		</div>
	</div>
	<div class="grid grid-rows-[auto_1fr] gap-y-3 md:col-span-3">
		<h2 class="text-2xl font-bold">結果</h2>
		<div id="result-display" class="grid gap-4 rounded-md bg-slate-200 p-4">
			{#if groups.length > 0}
				<div class="grid auto-rows-max gap-y-5">
					{#each groups as group, i (i)}
						<div
							role="group"
							aria-labelledby={`group-heading-${i}`}
							class="grid gap-y-2"
						>
							<h3 id={`group-heading-${i}`} class="text-xl font-bold">
								グループ {i + 1}
							</h3>
							<ul class="list-disc pl-5">
								{#each group as item (item)}
									<li>{item}</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			{:else}
				<p
					class="place-self-center text-3xl font-bold text-slate-500 md:text-4xl"
				>
					グループは……
				</p>
			{/if}
		</div>
	</div>

	<hr class="col-span-full mt-1.5 border-t-slate-200 border-b-white" />
	<div class="col-span-full grid gap-y-2">
		<h2 class="text-2xl font-bold">使い方</h2>
		<ol class="list-decimal pl-6">
			<li>テキストエリアにテキストを改行区切りで入力します</li>
			<li>分けるグループ数を入力します</li>
			<li>グループ分けボタンを押します</li>
			<li>結果のエリアにグループ分けされたテキストが表示されます</li>
		</ol>
	</div>
</div>
