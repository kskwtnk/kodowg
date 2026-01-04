<script lang="ts">
	import { resolve } from "$app/paths";

	const tools = [
		{ href: "/character-count", name: "文字数カウント" },
		{ href: "/qr-code-generator", name: "QRコードジェネレーター" },
		{ href: "/random-order", name: "ランダム並び替え" },
		{ href: "/roulette", name: "ルーレット" },
		{ href: "/timer", name: "タイマー" },
	] as const;
</script>

<div class="grid grid-cols-1 gap-y-9">
	<div class="grid grid-cols-subgrid gap-y-6">
		<h1 class="text-5xl font-bold">Kodowg</h1>
		<div>
			<p>
				Kodowgは日本語の「小道具」にインスパイアされた言葉です。日常のちょっとしたタスクに便利なツールを提供します。
			</p>
		</div>
		<div class="grid gap-4" data-grid>
			{#each tools as tool (tool.href)}
				<a
					href={resolve(tool.href)}
					class="flex flex-col items-center justify-center gap-y-2 rounded-md bg-slate-200 px-6 py-4 text-xl font-bold transition-colors duration-75 hover:bg-white"
				>
					{tool.name}
				</a>
			{/each}
		</div>
	</div>
	<div class="grid gap-y-3">
		<p>このサイトは以下の環境で動作確認を行っています:</p>
		<ul class="list-disc pl-5">
			<li>
				macOS
				<ul class="list-circle pl-5">
					<li>Arc</li>
				</ul>
			</li>
			<li>
				iOS
				<ul class="list-circle pl-5">
					<li>Arc Search</li>
				</ul>
			</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	[data-grid] {
		grid-template-columns: repeat(auto-fit, minmax(--spacing(80), 1fr));
	}
</style>
