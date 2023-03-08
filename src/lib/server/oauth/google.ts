import {
	OUATH_GOOGLE_CLIENT_ID,
	OUATH_GOOGLE_CLIENT_SECRET,
	OUATH_GOOGLE_REDIRECT_URI
} from '$env/static/private';

import { google } from '@lucia-auth/oauth/providers';
import { auth } from '$lib/server/lucia';

export const googleAuth = google(auth, {
	clientId: OUATH_GOOGLE_CLIENT_ID,
	clientSecret: OUATH_GOOGLE_CLIENT_SECRET,
	redirectUri: OUATH_GOOGLE_REDIRECT_URI,
	scope: [
		'https://www.googleapis.com/auth/userinfo.email',
		'https://www.googleapis.com/auth/userinfo.profile'
	]
});
