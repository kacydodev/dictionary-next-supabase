import Link from 'next/link';
import { Entry } from '@/utils/types';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function SourceSection({
	sourceUrls,
}: {
	sourceUrls: Entry['sourceUrls'];
}) {
	return (
		<article>
			<h3 className='text-lg text-slate-500'>Source</h3>
			{sourceUrls.map((url) => (
				<Link key={url} href={url} className='flex gap-x-3 text-sm underline'>
					{url}
					<ArrowTopRightOnSquareIcon className='size-5' />
				</Link>
			))}
		</article>
	);
}
