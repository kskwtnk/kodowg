<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<meta
		name="description"
		content="Kodowg is a word inspired by the Japanese term '小道具' (which means 'prop').Just like a prop helps set the scene, we're here to offer you nifty tools for those little tasks in life."
	/>
	<meta property="og:image" content={`${$page.url.origin}/og-image.jpg`} />
</svelte:head>

<slot />
