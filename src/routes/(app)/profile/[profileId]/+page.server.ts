import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { profileId } = await parent();

	throw redirect(303, `${profileId}/overview`);
};
