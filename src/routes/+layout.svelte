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
		<div class="container-fluid">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/blah">Blah</a></li>

				{#if $user}
					<form class="logout" method="post">
						<button class="logout" formaction="/auth?/LogOut">Logout</button>
					</form>
				{/if}
			</ul>
		</div>
	</nav>
	{#if $user}
		<p>Hello, {$user?.username}</p>
	{/if}
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
</style>
