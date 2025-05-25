<script lang="ts">
	import QRCode from "qrcode";

	const QR_SIZES = [256, 512, 1024] as const;
	type QRSize = (typeof QR_SIZES)[number];

	let inputText = $state("");
	let qrSize = $state<QRSize>(QR_SIZES[0]);
	let qrDataUrl = $state("");
	let displaySize = QR_SIZES[0];
	let fileFormat = $state<"png" | "svg">("png");

	async function generateQRCode() {
		if (!inputText) {
			qrDataUrl = "";
			return;
		}

		try {
			if (fileFormat === "png") {
				qrDataUrl = await QRCode.toDataURL(inputText, {
					width: qrSize,
					margin: 1,
				});
			} else {
				qrDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(
					await QRCode.toString(inputText, {
						type: "svg",
						width: qrSize,
						margin: 1,
					}),
				)}`;
			}
		} catch (err) {
			console.error(err);
		}
	}

	function downloadQRCode() {
		const link = document.createElement("a");
		link.download = `qrcode.${fileFormat}`;
		link.href = qrDataUrl;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	$effect(() => {
		generateQRCode();
	});
</script>

<div class="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-5 lg:gap-x-8">
	<h1 class="col-span-full text-5xl font-bold">QRコードジェネレーター</h1>
	<div class="flex flex-col gap-y-5 md:col-span-3">
		<div class="flex grow flex-col gap-y-3">
			<label for="textfield" class="text-2xl font-bold">変換するテキスト</label>
			<textarea
				id="textfield"
				placeholder="テキストを入力"
				class="grow resize-none rounded-md bg-white px-3 py-2"
				bind:value={inputText}
			></textarea>
		</div>
		<fieldset>
			<legend class="text-2xl font-bold">サイズ</legend>
			<div class="mt-1 flex gap-x-4">
				{#each QR_SIZES as size (size)}
					<label class="flex items-center gap-x-2">
						<input
							type="radio"
							name="size"
							value={size}
							bind:group={qrSize}
							class="accent-indigo-600"
						/>
						{size}px
					</label>
				{/each}
			</div>
		</fieldset>
		<fieldset>
			<legend class="text-2xl font-bold">ファイル形式</legend>
			<div class="mt-1 flex gap-x-4">
				<label class="flex items-center gap-x-2">
					<input
						type="radio"
						name="format"
						value="png"
						bind:group={fileFormat}
						class="accent-indigo-600"
					/>
					PNG
				</label>
				<label class="flex items-center gap-x-2">
					<input
						type="radio"
						name="format"
						value="svg"
						bind:group={fileFormat}
						class="accent-indigo-600"
					/>
					SVG
				</label>
			</div>
		</fieldset>
		<button
			onclick={downloadQRCode}
			disabled={!qrDataUrl}
			class="rounded-md bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-700 disabled:bg-slate-400"
		>
			ダウンロード
		</button>
	</div>
	<div class="flex flex-col gap-y-3 md:col-span-2">
		<h2 class="text-2xl font-bold">生成されたQRコード</h2>
		<div
			class="row-span-4 grid aspect-square place-items-center rounded-md bg-slate-200 p-4"
		>
			{#if qrDataUrl}
				<img
					src={qrDataUrl}
					alt="生成されたQRコード"
					width={displaySize}
					height={displaySize}
				/>
			{/if}
		</div>
	</div>
	<hr class="col-span-full mt-1.5 border-t-slate-200 border-b-white" />
	<div class="col-span-full grid gap-y-2">
		<h2 class="text-2xl font-bold">使い方</h2>
		<ol class="list-decimal pl-6">
			<li>テキストエリアに変換したい文字（URLなど）を入力します</li>
			<li>生成するQRコードのサイズを選択します</li>
			<li>画像の拡張子を選択します</li>
			<li>ダウンロードボタンを押してファイルをダウンロードします</li>
		</ol>
	</div>
</div>
