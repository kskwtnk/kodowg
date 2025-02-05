<script lang="ts">
	interface Props {
		lang: "en" | "ja";
		i18nText?: {
			description: string;
			functionName: Record<string, string>;
			note: string;
		};
	}

	let { lang, i18nText }: Props = $props();

	const defaultText = {
		description:
			"Kodowg is a word inspired by the Japanese term “小道具” (which means “props”). We offer you nifty tools for those little tasks in life.",
		functionName: {
			"character-count": "Character Count",
			"qr-code-generator": "QR Code Generator",
			"random-order": "Random Order",
			roulette: "Roulette",
			timer: "Timer",
		},
		note: "This site has been tested for operation in the following environments:",
	} as const;

	const pages = [
		"character-count",
		"qr-code-generator",
		"random-order",
		"roulette",
		"timer",
	] as const;

	const text = i18nText ?? defaultText;
</script>

<div class="grid grid-cols-1 gap-y-9">
	<div class="grid grid-cols-subgrid gap-y-6">
		<h1 class="text-5xl font-bold">Kodowg</h1>
		<div>
			<p>{text.description}</p>
		</div>
		<div
			class="grid grid-cols-[repeat(auto-fit,minmax(theme(spacing.80),1fr))] gap-4"
		>
			{#each pages as path}
				<a
					href="/{lang}/{path}"
					class="flex flex-col items-center justify-center gap-y-2 rounded-md bg-slate-200 px-6 py-4 text-xl font-bold transition-colors duration-75 hover:bg-white"
				>
					{text.functionName[path]}
				</a>
			{/each}
		</div>
	</div>
	<div class="grid gap-y-3">
		<p>{text.note}</p>
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
