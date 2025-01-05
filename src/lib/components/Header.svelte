<script lang="ts">
	interface Props {
		lang: "en" | "ja";
	}
	let { lang }: Props = $props();
</script>

<header class="flex items-center justify-center border-b border-gray-200">
	<div class="flex w-full max-w-screen-lg justify-between px-4 py-3">
		<a href="/{lang}" class="text-xl font-bold">Kodowg</a>
		<div class="flex items-center gap-x-2 text-sm">
			<a href="/ja" lang="ja" data-sveltekit-reload>日本語</a>
			<span>/</span>
			<a href="/en" lang="en" data-sveltekit-reload>English</a>
		</div>
	</div>
</header>
