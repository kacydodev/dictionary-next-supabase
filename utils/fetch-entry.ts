'use client';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ParamValue } from 'next/dist/server/request/params';

export default function useFetchEntry(query: ParamValue) {
	const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

	const data = useQuery({
		queryKey: ['entry'],
		queryFn: async () => {
			const res = await axios.get(URL + query);
			const data = await res.data;
			return data;
		},
		retry: 1,
	});

	return data;
}
