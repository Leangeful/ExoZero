<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="d-flex justify-content-center mt-3">
	<div class="card col-sm-4">
		<div class="card-header mb-2">Sign in</div>
		<div class="card-body">
			<form class="form" action="/auth?/SignIn" method="post" use:enhance>
				<div class="mb-3 px-2">
					<label class="form-label" for="email">Email</label>
					<input class="form-control " type="email" name="email" id="email" required />
				</div>

				<div class="mb-3 px-2">
					<label class="form-label" for="password">Password</label>
					<input class="form-control" type="password" name="password" id="password" required />
				</div>

				<div class="mb-3 form-check">
					<label class="form-check-label"
						><input type="checkbox" class="form-check-input" id="remember" />Remember me</label
					>
				</div>

				<div class="mb-3">
					<button class="btn btn-primary" type="submit">Sign In</button>
				</div>
			</form>
			<hr />
			<div class="row justify-content-center mb-3">or continue with</div>
			<form method="post">
				<div class="d-flex flex-row  justify-content-around">
					<button class="g_id_signin" formaction="/auth?/GSignIn">Google</button>
				</div>
			</form>
		</div>
	</div>
</div>
