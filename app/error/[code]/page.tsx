import Image from 'next/image';
import notFound from '../../../assets/images/undraw_page-eaten_b2rt.svg';
import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import Searchbar from '@/components/Searchbar';

export default async function ErrorPage({
	params,
}: {
	params: Promise<{ code: string }>;
}) {
	const { code } = await params;
	const displayError = () => {
		if (code === '404') {
			return (
				<section className='text-center'>
					<Image
						src={notFound}
						height={200}
						alt='Page Not Found Illustration'
						className='mx-auto'
					/>
					<div className='space-y-4'>
						<h2 className='text-2xl'>Page Not Found</h2>
						<Link href='/' className='link link-secondary'>
							Return home <ArrowUturnLeftIcon className='size-5 inline-flex' />
						</Link>
					</div>
				</section>
			);
		} else
			return (
				<section className='text-center space-y-4'>
					<h2 className='text-2xl'>Network Error: {code}</h2>
					<Link href='/' className='link link-secondary'>
						Return home <ArrowUturnLeftIcon className='size-5 inline-flex' />
					</Link>
				</section>
			);
	};

	return (
		<main className='space-y-16'>
			<Searchbar />
			{displayError()}
		</main>
	);
}
