<script lang="ts">
	import "../../app.css";
	import { page } from "$app/stores";
	import Footer from "$lib/components/Footer.svelte";

	let { data, children } = $props();
	const { i18nText } = data;

	const children_render = $derived(children);
</script>

<svelte:head>
	<meta name="description" content={i18nText.description} />
	<meta property="og:description" content={i18nText.description} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content="{$page.url.origin}/og-image.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Kodowg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@xrxoxcxox" />
</svelte:head>

<div class="mx-auto grid max-w-screen-lg gap-y-12 px-4 py-8">
	{@render children_render?.()}
	<Footer author={i18nText.author} />
</div>
