'use server';

import { redirect } from 'next/navigation';

export async function submitForm(formData: FormData) {
	const query = formData.get('query');

	redirect(`/lookup/${query}`);
}

// export async function Redirect(query: string) {
// 	redirect(`/lookup/${query}`);
// }
