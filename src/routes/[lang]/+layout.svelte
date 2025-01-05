<script lang="ts">
	import { page } from "$app/stores";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import SupportSection from "$lib/components/SupportSection.svelte";
	import "../../app.css";

	let { data, children } = $props();
	const { i18nText, lang } = data;

	const children_render = $derived(children);
	const pageTitle = $derived(
		$page.data.i18nText.title
			? `${$page.data.i18nText.title} - Kodowg`
			: "Kodowg",
	);

	const getAlternateLanguage = (currentLang: "en" | "ja") =>
		currentLang === "en" ? "ja" : "en";
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta property="og:title" content={pageTitle} />
	<meta name="description" content={$page.data.i18nText.description} />
	<meta property="og:description" content={$page.data.i18nText.description} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content="{$page.url.origin}/og-image.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Kodowg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@kskwtnk" />
	<link
		rel="alternate"
		hreflang={lang}
		href="{$page.url.origin}{$page.url.pathname}"
	/>
	<link
		rel="alternate"
		hreflang={getAlternateLanguage(lang)}
		href="{$page.url.origin}/{getAlternateLanguage(
			lang,
		)}{$page.url.pathname.replace(/^\/(en|ja)/, '')}"
	/>
</svelte:head>

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
