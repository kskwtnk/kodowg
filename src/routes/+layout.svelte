<script lang="ts">
	import { page } from "$app/state";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import { MetaTags, deepMerge } from "svelte-meta-tags";
	import "../app.css";

	let { data, children } = $props();

	let metaTags = $derived({
		...deepMerge(data.baseMetaTags, page.data.pageMetaTags),
	});
</script>

<MetaTags {...metaTags} />

<Header />
<div
	class="mx-auto flex w-full max-w-screen-lg grow flex-col gap-y-6 px-4 py-6"
>
	<main>
		{@render children()}
	</main>
	<aside
		class="mt-auto grid gap-y-3 rounded-md border border-slate-200 bg-slate-50 p-4 text-base text-slate-700"
	>
		<p>
			このサイトは、広告を掲載せずユーザーの皆様からの支援のみで運営を試みるプロジェクトです。多くのウェブサービスが広告収入に依存する中、ユーザーの皆様の自発的な支援による持続可能なモデルの可能性を探っています。
		</p>
		<p>
			もし当サイトが有用だと感じていただけましたら
			<a
				href="https://github.com/sponsors/kskwtnk"
				class="underline hover:text-indigo-600"
				target="_blank"
				rel="nofollow"
			>
				GitHub Sponsors
			</a>
			を通じてご支援いただければ幸いです。
		</p>
	</aside>
</div>
<Footer />
