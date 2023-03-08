import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const user = await locals.validate();
	return { user };
}) satisfies PageServerLoad;
