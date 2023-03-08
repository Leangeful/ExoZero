import { auth } from '$lib/server/lucia';
import { googleAuth } from '$lib/server/oauth/google';
import { error, redirect, type RequestHandler } from '@sveltejs/kit';

export const GET = (async ({ url, cookies }) => {
	const code = url.searchParams.get('code') ?? '';
	const authState = url.searchParams.get('state') ?? '';
	const storedAuthState = cookies.get('authState');

	if (authState !== storedAuthState) throw error(500, 'Auth state mismatch.');
	const { existingUser, providerUser, createUser } = await googleAuth.validateCallback(code);

	const user =
		existingUser ??
		(await createUser({
			username: providerUser.name,
			email: providerUser.email,
			role: 'user',
			profile: { create: {} }
		}));

	const newSession = await auth.createSession(user.userId);
	const sessionCookies = auth.createSessionCookies(newSession);

	sessionCookies.forEach((cookie) => {
		cookies.set(cookie.name, cookie.value, cookie.attributes);
	});

	throw redirect(307, '/');
}) satisfies RequestHandler;
