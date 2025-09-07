'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { redirect, useParams } from 'next/navigation';
import Entry from './components/Entry';
import Loading from '@/components/Loading';
import Searchbar from '@/components/Searchbar';
import { useFontContext } from '@/utils/contexts';

export default function EntryPage() {
	const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
	// const URL = 'https://freedictionaryapi.com/api/v1/entries/en/';
	const currentFont = useFontContext();
	const { query: param } = useParams();

	const { isLoading, isSuccess, isError, error, data } = useQuery({
		queryKey: ['entry'],
		queryFn: async () => {
			const query = URL + param;
			const res = await axios.get(query);
			const data = await res.data;
			return data;
		},
		retry: 1,
	});
	// http://localhost:3000/lookup/123
	// console.log(error);

	if (isError && axios.isAxiosError(error)) redirect(`/error/${error.status}`);

	return (
		<main className={currentFont.fontSlug}>
			<Searchbar />
			{isLoading && <Loading />}
			{isSuccess && <Entry data={data[0]} />}
		</main>
	);
}
