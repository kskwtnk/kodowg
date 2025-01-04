<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import SupportSection from "$lib/components/SupportSection.svelte";
	import "../../app.css";

	let { data, children } = $props();
	const { i18nText, lang } = data;

	const children_render = $derived(children);
</script>

<Header {lang} />
<div
	class="mx-auto flex w-full max-w-screen-lg grow flex-col gap-y-6 px-4 py-6"
>
	<main>
		{@render children_render?.()}
	</main>
	<aside class="mt-auto">
		<SupportSection {i18nText} />
	</aside>
</div>
<Footer author={i18nText.author} />
