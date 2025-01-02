<script lang="ts">
	interface Props {
		lang: "en" | "ja";
	}
	let { lang }: Props = $props();
</script>

<header class="flex items-center bg-white px-4 py-3 lg:px-8">
	<a href="/{lang}" class="text-xl font-bold">Kodowg</a>
</header>
