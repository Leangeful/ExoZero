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
			<div class="col-md-4">
				<div class="disp">
					<img src="/ufo_alpha2.png" alt="ufo wireframe" />
				</div>
			</div>
			<div class="col-md-4">
				<div class="disp">
					<img class="filtered" src="/ufo_alpha2.png" alt="ufo wireframe" />
				</div>
			</div>
			<div class="col-md-4">
				<div class="disp">
					<img class="filtered" src="/ufo_alpha2.png" alt="ufo wireframe" />
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.disp {
		width: 100%;
		height: auto;
		border: 0.1rem solid var(--ez-color);
		margin: 0.1%;
	}

	.filtered {
		filter: sepia() hue-rotate(180deg) saturate(2000%);
	}

	img {
		width: 100%;
		height: auto;
	}
</style>
