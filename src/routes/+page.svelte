<script lang="ts">
	import TopPageContent from "$lib/components/TopPageContent.svelte";

	const i18nText = {
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
	};
</script>

<TopPageContent lang="en" {i18nText} />
