<script lang="ts">
	import SignIn from '$lib/components/SignIn.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if !data.user}
	<SignIn />
{:else}
	<div class="disp col-sm-12">
		<img src="/ufo.png" alt="ufo wireframe" />
	</div>
{/if}

<style>
	img {
		height: auto;
		width: 100%;
		border: 0.1em solid var(--ez-color);
	}
	.disp {
	}
</style>
