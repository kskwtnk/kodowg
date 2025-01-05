<script lang="ts">
	let { data } = $props();
	const { lang, i18nText, pages } = data;
</script>

<div class="grid grid-cols-1 gap-y-9">
	<div class="grid grid-cols-subgrid gap-y-6">
		<h1 class="text-5xl font-bold">Kodowg</h1>
		<div>
			<p>{i18nText.description}</p>
		</div>
		<div
			class="grid grid-cols-[repeat(auto-fit,minmax(theme(spacing.80),1fr))] gap-4"
		>
			{#each pages as path}
				<a
					href="./{lang}/{path}"
					class="flex flex-grow flex-col items-center justify-center gap-y-2 rounded-md bg-slate-200 px-6 py-4 text-xl font-bold transition-colors duration-75 hover:bg-white"
				>
					{i18nText.functionName[path]}
				</a>
			{/each}
		</div>
	</div>
	<div class="grid gap-y-3">
		<p>{i18nText.note}</p>
		<ul class="list-disc pl-5">
			<li>
				macOS
				<ul class="list-circle pl-5">
					<li>Arc</li>
				</ul>
			</li>
			<li>
				iOS
				<ul class="list-circle pl-5">
					<li>Arc Search</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
