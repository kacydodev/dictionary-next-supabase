'use client';

import Link from 'next/link';

import { HeartIcon } from '@heroicons/react/24/solid';
// import FooterLink from './FooterLink';

export default function Footer() {
	return (
		<footer
			className={`text-sm md:text-base font-semibold bg-primary/20 text-primary`}
		>
			<p>
				Made with <HeartIcon className='size-4 inline-flex text-secondary' /> by{' '}
				<Link href='https://github.com/kacydodev' className='link'>
					Kacy Do
				</Link>
			</p>
			{/* <FooterLink
				platform='linkedin'
				url='https://linkedin.com/in/doinby/'
				title='doinby'
			/>
			<FooterLink
				url='https://github.com/doinby'
				platform='github'
				title='@doinby'
			/>
			<FooterLink
				url='https://twitter.com/doinby/'
				platform='twitter'
				title='@doinby'
			/>
			<FooterLink
				url='mailto:contact@doinby.co'
				platform='mail'
				title='contact@doinby.co'
			/> */}
		</footer>
	);
}

{
	/* <FooterLink
        url='https://linkedin.com/in/doinby/'
        socialPlatform='linkedin'
        title='doinby'
      />
      <FooterLink
        url='https://github.com/doinby'
        socialPlatform='github'
        title='@doinby'
      />
      <FooterLink
        url='https://twitter.com/doinby/'
        socialPlatform='twitter'
        title='@doinby'
      />
      <FooterLink
        url='mailto:contact@doinby.co'
        socialPlatform='mail'
        title='contact@doinby.co'
      /> */
}
