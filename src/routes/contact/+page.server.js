import { fail } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_SERVICE_KEY } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		if (!name || !email || !message) {
			return fail(400, { error: 'All fields required.' });
		}

		const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

		const { error } = await supabase
			.from('contact_submissions')
			.insert([{ name, email, message }]);

		if (error) {
			return fail(500, { error: 'Submission failed. Please try again.' });
		}

		return { success: true };
	}
};
