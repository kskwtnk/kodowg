<script lang="ts">
	export let data;
	const { lang, i18nText } = data;
	let text = "";

	// Using `String.prototype.length` will increase the count of surrogate pair characters, so use `Intl.Segmenter` instead.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
	let segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });

	$: lengthWithoutNewlines = text.includes("\n")
		? [...segmenter.segment(text.replace(/\n/g, ""))].length
		: [...segmenter.segment(text)].length;

	$: formattedLengthWithoutNewlines = new Intl.NumberFormat("en-US").format(
		lengthWithoutNewlines,
	);
</script>

<svelte:head>
	<title>{i18nText.title} - Kodowg</title>
	<meta property="og:title" content="{i18nText.title}  - Kodowg" />
</svelte:head>

<div
	class="mx-auto grid max-w-screen-lg grid-cols-1 gap-x-4 gap-y-6 px-4 py-8 md:grid-cols-5 lg:gap-x-8"
>
	<h1 class="col-span-full text-5xl font-bold">{i18nText.title}</h1>
	<div class="row-span-2 grid grid-rows-subgrid gap-y-3 md:col-span-3">
		<label for="textarea" class="text-2xl font-bold"
			>{i18nText.textToCount}</label
		>
		<textarea
			id="textarea"
			rows="12"
			placeholder={i18nText.placeholder}
			class="rounded-md px-3 py-2"
			bind:value={text}
		/>
	</div>
	<div class="row-span-2 grid grid-rows-subgrid gap-y-3 md:col-span-2">
		<h2 class="text-2xl font-bold">{i18nText.characters}</h2>
		<div
			id="result-display"
			class="grid min-h-24 place-content-center rounded-md bg-slate-200 p-4"
		>
			<span class="text-6xl font-bold md:text-7xl"
				>{formattedLengthWithoutNewlines}</span
			>
		</div>
	</div>
	<a
		href="/{lang}"
		class="justify-self-start text-slate-600 underline underline-offset-2"
	>
		{i18nText.returnToTop}
	</a>
</div>
