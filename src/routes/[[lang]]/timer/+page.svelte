<script lang="ts">
	export let data;
	const { lang, i18nText } = data;
	import { onDestroy } from "svelte";

	// Define the possible states of the timer.
	type TimerState = "ready" | "running" | "paused";

	// Timer setup variables.
	let minutes: number;
	let seconds: number;
	let max: number = 59;
	let min: number = 0;
	let totalSeconds: number = 0;
	let initialSeconds: number = 0;
	let displayMinutes: number;
	let displaySeconds: number;
	let timerState: TimerState = "ready";
	let countdownTimerId: ReturnType<typeof setInterval> | undefined;

	// Ensure minutes and seconds don't exceed the maximum allowed value.
	$: if (minutes > max) {
		minutes = max;
	}
	$: if (seconds > max) {
		seconds = max;
	}

	// Ensure minutes and seconds don't exceed the minimum allowed value.
	$: if (minutes < min) {
		minutes = min;
	}
	$: if (seconds < min) {
		seconds = min;
	}

	// Calculate total seconds whenever minutes or seconds input changes.
	$: totalSeconds = (minutes ? minutes * 60 : 0) + (seconds ? seconds : 0);

	// Stop the timer and reset the state if totalSeconds is 0 or less.
	$: if (totalSeconds < 0) {
		clearInterval(countdownTimerId);
		timerState = "ready";
	}

	// Calculate display minutes and seconds from total seconds.
	$: displayMinutes = Math.floor(totalSeconds / 60);
	$: displaySeconds = totalSeconds % 60;

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

<svelte:head>
	<title>{i18nText.title} - Kodowg</title>
	<meta property="og:title" content="{i18nText.title} - Kodowg" />
</svelte:head>

<div
	class="mx-auto grid max-w-screen-lg grid-cols-1 gap-x-4 gap-y-6 px-4 py-8 lg:gap-x-8"
>
	<h1 class="text-5xl font-bold">{i18nText.title}</h1>
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
				<label for="minutes" class="label">{i18nText.minutes}</label>
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
				<label for="seconds" class="label">{i18nText.seconds}</label>
			</div>
		{:else}
			<div class="grid place-items-center">
				<span role="timer" aria-label="min" class="number">
					{displayMinutes}
				</span>
				<span class="label">{i18nText.minutes}</span>
			</div>
			<div class="grid place-items-center">
				<span role="timer" aria-label="sec" class="number">
					{displaySeconds}
				</span>
				<span class="label">{i18nText.seconds}</span>
			</div>
		{/if}
	</div>
	<div>
		<div class="grid gap-x-4 gap-y-3 sm:grid-cols-2">
			{#if timerState === "ready"}
				<button
					class="rounded-md bg-indigo-600 p-2 text-2xl font-bold text-white hover:bg-indigo-800 disabled:opacity-50"
					on:click={startTimer}>{i18nText.start}</button
				>
			{/if}

			{#if timerState === "running"}
				<button
					class="rounded-md bg-indigo-600 p-2 text-2xl font-bold text-white hover:bg-indigo-800 disabled:opacity-50"
					on:click={pauseTimer}>{i18nText.pause}</button
				>
			{/if}

			{#if timerState === "paused"}
				<button
					class="rounded-md bg-indigo-600 p-2 text-2xl font-bold text-white hover:bg-indigo-800 disabled:opacity-50"
					on:click={countdown}>{i18nText.resume}</button
				>
			{/if}
			<button
				disabled={timerState === "ready"}
				class="rounded-md border border-slate-500 bg-slate-100 p-2 text-2xl font-bold text-slate-600 hover:bg-slate-200 hover:text-slate-800 disabled:border-slate-300 disabled:bg-slate-200 disabled:text-slate-400"
				on:click={cancelTimer}>{i18nText.cancel}</button
			>
		</div>
	</div>
	<div>
		<a href="/{lang}" class="text-slate-600 underline underline-offset-2"
			>{i18nText.returnToTop}</a
		>
	</div>
</div>

<style lang="postcss">
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
