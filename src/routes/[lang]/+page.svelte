<script lang="ts">
	import { page } from "$app/stores";
	import TopPageContent from "$lib/components/TopPageContent.svelte";

	let { data } = $props();
	const { lang, i18nText } = $derived(data);
</script>

<svelte:head>
	{#if lang === "en"}
		<link rel="canonical" href="{$page.url.origin}/" />
	{/if}
</svelte:head>

<TopPageContent {lang} i18nText={lang === "ja" ? i18nText : undefined} />
