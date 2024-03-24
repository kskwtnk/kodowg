<script>
	import '../../app.css';
	import { page } from '$app/stores';

	export let data;
	const { i18nText } = data;
</script>

<svelte:head>
	<meta name="description" content={i18nText.description} />
	<meta property="og:description" content={i18nText.description} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={`${$page.url.origin}/og-image.jpg`} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Kodowg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@xrxoxcxox" />
</svelte:head>

<slot />
