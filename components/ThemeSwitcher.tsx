'use client';

import { useDarkmodeContext } from '@/utils/contexts';
import { MoonIcon as MoonIconOutline } from '@heroicons/react/24/outline';
import { MoonIcon as MoonIconSolid } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

export default function ThemeSwitcher() {
	const { isDarkmode, toggleDarkmode } = useDarkmodeContext();
	const darkModeIcon = isDarkmode ? (
		<MoonIconSolid className='size-5 text-primary' />
	) : (
		<MoonIconOutline className='size-5 text-primary' />
	);
	// const storedMode = JSON.parse(localStorage.getItem('darkMode') || '');

	useEffect(() => {
		const rootElement = document.getElementsByTagName('html')[0];

		if (isDarkmode) {
			rootElement.setAttribute('data-theme', 'dark');
		} else rootElement.setAttribute('data-theme', 'light');
	}, [isDarkmode]);

	// const local = JSON.parse(localStorage.getItem('darkMode') || '');
	// console.log(local && local.state.isDarkmode);

	return (
		<>
			<label className='flex gap-2 items-center'>
				<input
					type='checkbox'
					checked={isDarkmode}
					onChange={() => toggleDarkmode()}
					className='toggle text-white bg-neutral-400 checked:border-primary checked:bg-primary checked:text-white'
				/>
				{darkModeIcon}
				{/* <MoonIcon className='size-5 text-primary' /> */}
			</label>
		</>
	);
}
