<script lang="ts">
	import SignIn from '$lib/components/SignIn.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if !data.user}
	<SignIn />
{/if}
