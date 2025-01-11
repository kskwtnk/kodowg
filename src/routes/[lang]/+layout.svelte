<script lang="ts">
	import { page } from "$app/stores";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import SupportSection from "$lib/components/SupportSection.svelte";
	import { JsonLd, MetaTags } from "svelte-meta-tags";
	import "../../app.css";

	let { data, children } = $props();
	const { i18nText, lang } = data;

	const pageTitle = $derived(
		$page.data.i18nText.title
			? `${$page.data.i18nText.title} - Kodowg`
			: "Kodowg",
	);
</script>

<MetaTags
	title={pageTitle}
	description={$page.data.i18nText.description}
	openGraph={{
		url: $page.url.href,
		title: pageTitle,
		description: $page.data.i18nText.description,
		images: [
			{
				url: `${$page.url.origin}/og-image.jpg`,
				width: 1200,
				height: 630,
				alt: "Kodowg",
			},
		],
		siteName: "Kodowg",
	}}
	twitter={{
		creator: "@kskwtnk",
		site: "@kskwtnk",
		cardType: "summary_large_image",
		title: pageTitle,
		description: $page.data.i18nText.description,
		image: `${$page.url.origin}/og-image.jpg`,
		imageAlt: "Kodowg",
	}}
	languageAlternates={[
		{
			hrefLang: "ja",
			href: `${$page.url.origin}/ja${$page.url.pathname.replace(/^\/(en|ja)/, "")}`,
		},
		{
			hrefLang: "en",
			href: `${$page.url.origin}/en${$page.url.pathname.replace(/^\/(en|ja)/, "")}`,
		},
	]}
/>

<JsonLd
	schema={{
		"@type": "WebSite",
		name: "Kodowg",
		inLanguage: lang,
		author: {
			"@type": "Person",
			name: "Keisuke Watanuki",
		},
		copyrightYear: "2024",
		headline: pageTitle,
		description: $page.data.i18nText.description,
		url: $page.url.href,
	}}
/>

<Header {lang} />
<div
	class="mx-auto flex w-full max-w-screen-lg grow flex-col gap-y-6 px-4 py-6"
>
	<main>
		{@render children()}
	</main>
	<aside class="mt-auto">
		<SupportSection {i18nText} />
	</aside>
</div>
<Footer author={i18nText.author} />
