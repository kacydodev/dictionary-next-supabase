'use client';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function useFetchEntry(query: string) {
	const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

	const data = useQuery({
		queryKey: ['entry', query],
		queryFn: async () => {
			const res = await axios.get(URL + query);
			const data = await res.data;
			return data;
		},
		retry: 1,
		// Disables fetch until query changes
		// enabled: !!query,
	});

	return data;
}
