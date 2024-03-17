<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta
		name="description"
		content="Kodowg is a word inspired by the Japanese term “小道具” (which means “props”). We offer you nifty tools for those little tasks in life."
	/>
	<meta
		property="og:description"
		content="Kodowg is a word inspired by the Japanese term “小道具” (which means “props”). We offer you nifty tools for those little tasks in life."
	/>
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={`${$page.url.origin}/og-image.jpg`} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Kodowg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@xrxoxcxox" />
</svelte:head>

<slot />
