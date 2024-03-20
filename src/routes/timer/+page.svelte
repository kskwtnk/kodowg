<script lang="ts">
	import { onDestroy } from 'svelte';

	type TimerState = 'ready' | 'running' | 'paused';

	let minutes: number = 0;
	let seconds: number = 0;
	let totalSeconds: number = 0;
	let initialSeconds: number = 0;
	let timeLeft: string = '';
	let timerState: TimerState = 'ready';

	let countdownTimerId: ReturnType<typeof setInterval> | undefined;

	$: timeLeft = formatTime(totalSeconds);
	$: totalSeconds = minutes * 60 + seconds;
	$: if (totalSeconds <= 0) {
		clearInterval(countdownTimerId);
		timerState = 'ready';
	}

	function formatTime(seconds: number): string {
		const displayMinutes = Math.floor(seconds / 60);
		const displaySeconds = seconds % 60;
		return `${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
	}

	function countdown() {
		countdownTimerId = setInterval(() => {
			totalSeconds -= 1;
		}, 1000);
		timerState = 'running';
	}

	function startTimer() {
		if (totalSeconds <= 0) {
			initialSeconds = minutes * 60 + seconds;
			totalSeconds = initialSeconds;
		}
		countdown();
	}

	function pauseTimer() {
		clearInterval(countdownTimerId);
		timerState = 'paused';
	}

	function cancelTimer() {
		clearInterval(countdownTimerId);
		totalSeconds = initialSeconds;
		timerState = 'ready';
	}

	onDestroy(() => {
		clearInterval(countdownTimerId);
	});

	$: console.log('timerState', timerState);
</script>

<svelte:head>
	<title>Kodowg - Timer</title>
	<meta property="og:title" content="Kodowg - Timer" />
</svelte:head>

<h1>Timer</h1>

<p>{timeLeft}</p>

<label for="minutes">Minutes:</label>
<input type="number" id="minutes" min="0" bind:value={minutes} disabled={timerState !== 'ready'} />

<label for="seconds">Seconds:</label>
<input type="number" id="seconds" min="0" bind:value={seconds} disabled={timerState !== 'ready'} />

{#if timerState === 'ready'}
	<button on:click={startTimer}>Start</button>
{/if}

{#if timerState === 'running'}
	<button on:click={pauseTimer}>Pause</button>
{/if}

{#if timerState === 'paused'}
	<button on:click={countdown}>Resume</button>
{/if}

{#if timerState !== 'ready'}
	<button on:click={cancelTimer}>Cancel</button>
{/if}
