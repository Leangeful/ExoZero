<script lang="ts">
	import SignIn from '$lib/components/SignIn.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if !data.user}
	<SignIn />
{:else}
	<div class="grid">
		<div class="row">
			<div class="disp col-sm-4">
				<img src="/ufo_alpha2.png" alt="ufo wireframe" />
			</div>
			<div class="disp col-sm-4">
				<img class="filtered" src="/ufo_alpha2.png" alt="ufo wireframe" />
			</div>
			<div class="disp col-sm-4">
				<img src="/ufo_alpha2.png" alt="ufo wireframe" />
			</div>
		</div>
		<div class="row">
			<div class="disp col-sm-4">
				<img src="/ufo_alpha2.png" alt="ufo wireframe" />
			</div>
			<div class="disp col-sm-4">
				<img src="/ufo_alpha2.png" alt="ufo wireframe" />
			</div>
			<div class="disp col-sm-4">
				<img class="filtered" src="/ufo_alpha2.png" alt="ufo wireframe" />
			</div>
		</div>
	</div>
{/if}

<style>
	img {
		width: 100%;
		height: auto;
	}
	.disp {
		height: auto;
		border: 0.1rem solid var(--ez-color);
	}

	.filtered {
		filter: sepia() hue-rotate(180deg) saturate(2000%);
	}
</style>
