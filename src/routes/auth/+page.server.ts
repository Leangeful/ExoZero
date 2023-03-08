import { auth } from '$lib/server/lucia';
import { googleAuth } from '$lib/server/oauth/google';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	//TODO implement SignIn/-Up without OAuth
	/* SignIn: async ({ request, locals }) => {
		console.log('SignIn');
		const form = Object.fromEntries(await request.formData());
		console.log(form);
		const email = form.email as string;
		const password = form.password as string;
		const remember = form.remember as string;
	},
	SignUp: async ({ request, locals }) => {
		console.log('SignUp');
		const form = Object.fromEntries(await request.formData());
		console.log(form);
		const email = form.email as string;
		const password = form.password as string;
		const remember = form.remember as string;
	}, */
	GSignIn: async ({ cookies }) => {
		console.log('GSignIn');

		const [authUrl, state] = await googleAuth.getAuthorizationUrl();

		cookies.set('authState', state, {
			path: '/',
			httpOnly: true,
			maxAge: 60 * 60
		});

		throw redirect(303, authUrl.toString());
	},
	LogOut: async ({ locals }) => {
		const session = await locals.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.setSession(null); // remove cookie
		throw redirect(302, '/');
	}
};
