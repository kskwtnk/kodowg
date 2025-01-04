<script lang="ts">
	interface Props {
		i18nText: {
			title?: string;
			description: string;
		};
		pageUrl: URL;
	}
	let { i18nText, pageUrl }: Props = $props();

	const pageTitle = i18nText.title ? `${i18nText.title} - Kodowg` : "Kodowg";
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta property="og:title" content={pageTitle} />
	<meta name="description" content={i18nText.description} />
	<meta property="og:description" content={i18nText.description} />
	<meta property="og:url" content={pageUrl.href} />
	<meta property="og:image" content="{pageUrl.origin}/og-image.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Kodowg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@kskwtnk" />
</svelte:head>
