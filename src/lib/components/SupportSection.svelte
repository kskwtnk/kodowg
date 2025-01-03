<script lang="ts">
	interface Props {
		i18nText: {
			support: {
				description: string;
				cta: string;
				closing: string;
			};
		};
	}
	let { i18nText }: Props = $props();
</script>

<div
	class="grid gap-y-3 rounded-md border border-slate-200 bg-slate-50 p-4 text-base text-slate-700"
>
	<p>
		{i18nText.support.description}
	</p>
	<p>
		{i18nText.support.cta}
		<a
			href="https://github.com/sponsors/kskwtnk"
			class="underline hover:text-blue-600"
			target="_blank"
			rel="nofollow"
		>
			GitHub Sponsors
		</a>
		{i18nText.support.closing}
	</p>
</div>
