'use client';

import { useFontContext } from '@/utils/contexts';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { FontType } from '@/utils/types';

const FONTS: FontType[] = [
	{
		fontName: 'Sans',
		fontSlug: 'font-sans',
	},
	{
		fontName: 'Sans-serif',
		fontSlug: 'font-serif',
	},
	{
		fontName: 'Monospaced',
		fontSlug: 'font-mono',
	},
];

export default function FontMenu() {
	const currentFont = useFontContext();
	const setFont = useFontContext((state) => state.setFont);
	const fontOptions = FONTS.filter((f) => f.fontName !== currentFont.fontName);

	return (
		<Menu>
			<MenuButton className='px-0 py-2 w-[146px] flex gap-3 items-center justify-end'>
				{currentFont.fontName}
				<ChevronDownIcon className='size-4' />
			</MenuButton>
			<MenuItems
				as='ul'
				anchor='bottom'
				// className='flex flex-col items-start rounded shadow-lg/20 bg-white dark:bg-primary dark:text-white text-sm md:text-base'
				className='flex flex-col items-start rounded shadow-lg/20 bg-white dark:bg-primary dark:text-white text-sm md:text-base'
			>
				{fontOptions.map((font) => {
					return (
						<MenuItem key={font.fontSlug}>
							{/* <li onClick={() => setFont(font)} className='w-full px-6 py-3'> */}
							<li
								onClick={() => setFont(font)}
								className='w-full px-6 py-3 hover:bg-secondary odd:not-last:border-b-1 odd:not-last:border-base-300/20'
							>
								{font.fontName}
							</li>
						</MenuItem>
					);
				})}
			</MenuItems>
		</Menu>
	);
}
