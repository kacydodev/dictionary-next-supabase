'use client';

import axios from 'axios';
import { redirect, useParams } from 'next/navigation';
import Entry from './components/Entry';
import Loading from '@/components/Loading';
import Searchbar from '@/components/Searchbar';

import useFetchEntry from '@/utils/fetch-entry';

export default function EntryPage() {
	// const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
	// const URL = 'https://freedictionaryapi.com/api/v1/entries/en/';
	const { query } = useParams();

	const { isLoading, isSuccess, isError, error, data } = useFetchEntry(query);
	// http://localhost:3000/lookup/123
	// console.log(error);

	if (isError && axios.isAxiosError(error)) redirect(`/error/${error.status}`);

	return (
		<main className=''>
			<Searchbar />
			{isLoading && <Loading />}
			{isSuccess && <Entry data={data[0]} />}
		</main>
	);
}
