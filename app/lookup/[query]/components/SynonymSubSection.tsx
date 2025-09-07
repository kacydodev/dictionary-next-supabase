import Link from 'next/link';

interface SynonymsInterface {
	synonyms?: string[];
	antonyms?: string[];
}

export default function SynonymsSubSection({
	synonyms,
	antonyms,
}: SynonymsInterface) {
	function displaySynonyms(arr: string[]) {
		// TODO: refactor code
		return (
			arr
				// Remove duplicate word
				.filter((item, index) => arr.indexOf(item) === index)
				// Map words and add hyperlink
				.map((word) => (
					<Link
						key={word}
						href={`/lookup/${word}`}
						className='link text-primary font-bold no-underline'
					>
						{word}
					</Link>
				))
		);
	}

	return (
		<div className='flex flex-wrap items-baseline gap-x-4'>
			{synonyms && (
				<>
					<h3 className='text-lg text-slate-500'>Synnonyms</h3>
					{displaySynonyms(synonyms)}
				</>
			)}
			{antonyms && (
				<>
					<h3 className='text-lg text-slate-500'>Antonyms</h3>
					{displaySynonyms(antonyms)}
				</>
			)}
		</div>
	);
}
