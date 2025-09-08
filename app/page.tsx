'use client';

import Searchbar from '@/components/Searchbar';
import { useFontContext } from '@/utils/contexts';

export default function HomePage() {
	const currentFont = useFontContext();

	return (
		<main className={`pt-32 ${currentFont.fontSlug}`}>
			<Searchbar />
		</main>
	);
}
