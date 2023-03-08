<script lang="ts">
	import { page } from '$app/stores';
	import { handleSession } from '@lucia-auth/sveltekit/client';

	import '../app.css';
	import 'bootstrap/dist/css/bootstrap-grid.css';

	handleSession(page);
</script>

<div class="container">
	<slot />
</div>
