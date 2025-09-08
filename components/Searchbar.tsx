'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

export default function Searchbar() {
	const [isDirty, setIsDirty] = useState<boolean | null>(null);
	const [input, setInput] = useState<string>('');
	const [error, setError] = useState<string | null>(null);
	const { query } = useParams();
	const buttonState = !isDirty || error ? 'btn-disabled' : '';

	// Accepts only alphabets, space and hyphens
	const regex = /^[a-zA-Z- ]*$/gm;

	function handleOnBlur() {
		setIsDirty(true);
		if (!input || !input.length) {
			setError('Please enter at least 1 character');
		}
	}

	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		const formInput = e.target.value;
		if (isDirty && !formInput.match(regex)) {
			setError(`Only letters and hyphens (-) are accepted`);
		} else if (isDirty && formInput.match(regex)) {
			setError(null);
		}
		setInput(formInput);
	}

	return (
		<form action={`/lookup/${input}`} className='relative w-full mb-6'>
			<div className='join w-full'>
				<input
					onMouseDown={() => setIsDirty(true)}
					onBlur={handleOnBlur}
					onChange={handleOnChange}
					defaultValue={query}
					type='text'
					name='query'
					placeholder='Search dictionary'
					className='input join-item w-full pl-4 bg-base-200 rounded-l-full'
				/>
				<button
					type='submit'
					className={`btn btn-primary join-item shadow-none ${buttonState}`}
				>
					<MagnifyingGlassIcon className='size-6' />
				</button>
			</div>
			<p className={`absolute bottom-0 ml-4 text-sm md:text-base text-error`}>
				{error ? error : ' '}
			</p>
		</form>
	);
}
