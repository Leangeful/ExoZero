import {
	OAUTH_GOOGLE_CLIENT_ID,
	OAUTH_GOOGLE_CLIENT_SECRET,
	OAUTH_GOOGLE_REDIRECT_URI
} from '$env/static/private';

import { google } from '@lucia-auth/oauth/providers';
import { auth } from '$lib/server/lucia';

export const googleAuth = google(auth, {
	clientId: OAUTH_GOOGLE_CLIENT_ID,
	clientSecret: OAUTH_GOOGLE_CLIENT_SECRET,
	redirectUri: OAUTH_GOOGLE_REDIRECT_URI,
	scope: [
		'https://www.googleapis.com/auth/userinfo.email',
		'https://www.googleapis.com/auth/userinfo.profile'
	]
});
