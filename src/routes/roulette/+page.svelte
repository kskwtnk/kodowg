<script lang="ts">
	let inputText = '';
	let items: string[] = [];
	let selectedItem = '';
	let isSpinning = false;

	function startRoulette() {
		if (inputText.trim() === '') return;

		items = inputText.split('\n').filter((line) => line.trim() !== '');
		selectedItem = '';
		isSpinning = true;

		let spinCount = Math.floor(Math.random() * 10) + 10;
		let currentIndex = 0;

		const interval = setInterval(() => {
			selectedItem = items[currentIndex];
			currentIndex = (currentIndex + 1) % items.length;
			spinCount--;

			if (spinCount <= 0) {
				clearInterval(interval);
				isSpinning = false;
			}
		}, 100);
	}
</script>

<h1>Roulette</h1>
<textarea bind:value={inputText} rows="10" cols="50" placeholder="Please enter text here"
></textarea>
<button on:click={startRoulette} disabled={isSpinning}>Start</button>

<p>Result</p>
{#if selectedItem}
	<p>{selectedItem}</p>
{/if}
