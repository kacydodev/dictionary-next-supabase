import { submitForm } from '@/app/actions';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Searchbar() {
	// TODO: search bar display current query word. Zustand?
	// TODO: error boundary for query NaN, undefined, minChar
	return (
		<form action={submitForm} className='join w-full'>
			<input
				type='text'
				name='query'
				placeholder='Search dictionary'
				className='input join-item w-full pl-4 bg-base-200 rounded-l-full'
			/>
			<button type='submit' className='btn btn-primary join-item shadow-none'>
				<MagnifyingGlassIcon className='size-6' />
			</button>
		</form>
	);
}
