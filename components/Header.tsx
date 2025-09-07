import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo.svg';
import FontMenu from './FontMenu';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
	return (
		<nav className='flex items-center justify-between'>
			<Link href='/' className='m-0'>
				<Image src={logo} width={27} alt='Dictionary App Logo' />
			</Link>
			<div className='flex gap-5 items-center text-sm md:text-base'>
				<FontMenu />
				<ThemeSwitcher />
			</div>
		</nav>
	);
}
