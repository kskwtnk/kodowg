<script lang="ts">
	import { onDestroy } from "svelte";

	// Define the possible states of the timer.
	type TimerState = "ready" | "running" | "paused";

	// Timer setup variables.
	let minutes: number = $state(0);
	let seconds: number = $state(0);
	let max: number = 59;
	let min: number = 0;
	let totalSeconds: number = $state(0);
	let initialSeconds: number = 0;
	let displayMinutes: number = $derived(Math.floor(totalSeconds / 60));
	let displaySeconds: number = $derived(totalSeconds % 60);
	let timerState: TimerState = $state("ready");
	let countdownTimerId: ReturnType<typeof setInterval> | undefined = $state();

	// Ensure minutes and seconds don't exceed the maximum allowed value.
	$effect(() => {
		if (minutes > max) {
			minutes = max;
		}
	});
	$effect(() => {
		if (seconds > max) {
			seconds = max;
		}
	});

	// Ensure minutes and seconds don't exceed the minimum allowed value.
	$effect(() => {
		if (minutes < min) {
			minutes = min;
		}
	});
	$effect(() => {
		if (seconds < min) {
			seconds = min;
		}
	});

	// Calculate total seconds whenever minutes or seconds input changes.
	$effect(() => {
		totalSeconds = (minutes ? minutes * 60 : 0) + (seconds ? seconds : 0);
	});

	// Stop the timer and reset the state if totalSeconds is 0 or less.
	$effect(() => {
		if (totalSeconds < 0) {
			clearInterval(countdownTimerId);
			timerState = "ready";
		}
	});

	// Calculate display minutes and seconds from total seconds.
	function countdown() {
		countdownTimerId = setInterval(() => {
			totalSeconds -= 1;
		}, 1000);
		timerState = "running";
	}

	function startTimer() {
		if (totalSeconds < 0) {
			initialSeconds = (minutes ? minutes * 60 : 0) + (seconds ? seconds : 0);
			totalSeconds = initialSeconds;
		}
		countdown();
	}

	function pauseTimer() {
		clearInterval(countdownTimerId);
		timerState = "paused";
	}

	function cancelTimer() {
		clearInterval(countdownTimerId);
		totalSeconds = initialSeconds;
		timerState = "ready";
	}

	onDestroy(() => {
		clearInterval(countdownTimerId);
	});
</script>

<div class="grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8">
	<h1 class="text-5xl font-bold">タイマー</h1>
	<div
		id="result-display"
		class="flex content-center justify-center gap-x-12 rounded-md bg-slate-200 py-4 sm:gap-x-16 sm:py-8 md:gap-x-20 md:py-12 lg:gap-x-24 lg:py-16"
	>
		{#if timerState === "ready"}
			<div class="grid place-items-center">
				<input
					type="number"
					id="minutes"
					placeholder="0"
					{min}
					{max}
					class="number input"
					bind:value={minutes}
				/>
				<label for="minutes" class="label">分</label>
			</div>
			<div class="grid place-items-center">
				<input
					type="number"
					id="seconds"
					placeholder="0"
					{min}
					{max}
					class="number input"
					bind:value={seconds}
				/>
				<label for="seconds" class="label">秒</label>
			</div>
		{:else}
			<div class="grid place-items-center">
				<span role="timer" aria-label="分" class="number">
					{displayMinutes}
				</span>
				<span class="label">分</span>
			</div>
			<div class="grid place-items-center">
				<span role="timer" aria-label="秒" class="number">
					{displaySeconds}
				</span>
				<span class="label">秒</span>
			</div>
		{/if}
	</div>
	<div>
		<div class="grid gap-x-4 gap-y-3 sm:grid-cols-2">
			{#if timerState === "ready"}
				<button
					class="rounded-md bg-indigo-600 p-2 text-2xl font-bold text-white hover:bg-indigo-800 disabled:opacity-50"
					onclick={startTimer}>スタート</button
				>
			{:else if timerState === "running"}
				<button
					class="rounded-md bg-indigo-600 p-2 text-2xl font-bold text-white hover:bg-indigo-800 disabled:opacity-50"
					onclick={pauseTimer}>一時停止</button
				>
			{:else if timerState === "paused"}
				<button
					class="rounded-md bg-indigo-600 p-2 text-2xl font-bold text-white hover:bg-indigo-800 disabled:opacity-50"
					onclick={countdown}>再開</button
				>
			{/if}
			<button
				disabled={timerState === "ready"}
				class="rounded-md border border-slate-300 bg-white p-2 text-2xl font-bold text-slate-600 hover:bg-slate-200 hover:text-slate-800 disabled:bg-slate-200 disabled:text-slate-400"
				onclick={cancelTimer}>キャンセル</button
			>
		</div>
	</div>
	<hr class="col-span-full mt-1.5 border-t-slate-200 border-b-white" />
	<div class="col-span-full grid gap-y-2">
		<h2 class="text-2xl font-bold">使い方</h2>
		<ol class="list-decimal pl-6">
			<li>計りたい時間（分、秒）を入力します</li>
			<li>スタートボタンを押すとカウントダウンが始まります</li>
			<li>一時停止をすると今の秒数のまま止まり、停止を押すと0秒に戻ります</li>
		</ol>
	</div>
</div>

<style lang="postcss">
	@reference "../../app.css";

	.input {
		@apply max-w-32 [appearance:textfield] sm:max-w-44 md:max-w-56 lg:max-w-64 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none;
	}
	.number {
		@apply aspect-square h-24 bg-inherit text-center text-8xl tabular-nums sm:h-32 sm:text-9xl md:h-40 md:text-[10rem] lg:h-48 lg:text-[12rem];
	}
	.label {
		@apply text-center text-2xl text-slate-600;
	}
</style>
