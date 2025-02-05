<script lang="ts">
	import { page } from "$app/state";
	interface Props {
		lang: "en" | "ja";
	}
	let { lang }: Props = $props();
	const path = $derived(page.url.pathname.replace(/^\/(ja|en)/, ""));
</script>

<header class="flex items-center justify-center border-b border-gray-200">
	<div class="flex w-full max-w-screen-lg justify-between px-4 py-3">
		<a href="/{lang}" class="text-xl font-bold">Kodowg</a>
		<div class="flex items-center gap-x-2 text-sm">
			<a href="/en{path}" lang="en">English</a>
			<span>/</span>
			<a href="/ja{path}" lang="ja">日本語</a>
		</div>
	</div>
</header>
