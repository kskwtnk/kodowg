<script lang="ts">
	const functions = {
		"character-count": "文字数カウント",
		"qr-code-generator": "QRコードジェネレーター",
		"random-order": "ランダム並び替え",
		roulette: "ルーレット",
		timer: "タイマー",
	} as const;
</script>

<div class="grid grid-cols-1 gap-y-9">
	<div class="grid grid-cols-subgrid gap-y-6">
		<h1 class="text-5xl font-bold">Kodowg</h1>
		<div>
			<p>
				Kodowgは日本語の「小道具」にインスパイアされた言葉です。日常のちょっとしたタスクに便利なツールを提供します。
			</p>
		</div>
		<div
			class="grid grid-cols-[repeat(auto-fit,minmax(theme(spacing.80),1fr))] gap-4"
		>
			{#each Object.entries(functions) as [key, value] (key)}
				<a
					href="/{key}"
					class="flex flex-col items-center justify-center gap-y-2 rounded-md bg-slate-200 px-6 py-4 text-xl font-bold transition-colors duration-75 hover:bg-white"
				>
					{value}
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
