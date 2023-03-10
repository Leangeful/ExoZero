<script lang="ts">
	import { page } from '$app/stores';
	import { getUser, handleSession } from '@lucia-auth/sveltekit/client';

	import '../app.css';
	import 'bootstrap/dist/css/bootstrap-grid.css';

	handleSession(page);
	const user = getUser();
</script>

<div class="container">
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/blah">Blah</a></li>

			{#if $user}
				<form class="logout" method="post">
					<button class="logout" formaction="/auth?/LogOut">Logout</button>
				</form>
			{/if}
		</ul>
	</nav>
	<slot />
</div>

<style>
	.logout {
		display: inline;
		float: right;
	}
	li {
		display: inline;
	}

	a {
		text-decoration: none;
		color: var(--ez-color);
	}
	a:visited {
		color: var(--ez-color);
	}

	nav {
		width: 100%;
	}

	.container {
		padding: 0%;
	}
	ul {
		padding: 0%;
	}
</style>
