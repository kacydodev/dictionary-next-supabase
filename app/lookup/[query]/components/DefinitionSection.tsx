import type { Entry } from '@/utils/types';
import SynonymsSubSection from './SynonymSubSection';

export default function DefinitionSection({
	meanings,
}: {
	meanings: Entry['meanings'];
}) {
	return (
		<>
			{meanings.map(
				(
					{
						partOfSpeech,
						definitions: [{ definition, example }],
						synonyms,
						antonyms,
					},
					idx
				) => {
					return (
						<article key={`${partOfSpeech}-${idx}`}>
							<p className='divider divider-start font-bold'>{partOfSpeech}</p>
							<h3 className='list-none text-lg text-slate-500'>Meaning</h3>
							<ul className='ml-4 space-y-3 list-disc list-inside'>
								<li>{definition}</li>
								{example && <q className='ml-3 text-slate-500'>{example}</q>}
							</ul>
							{synonyms && synonyms?.length > 0 && (
								<SynonymsSubSection synonyms={synonyms} />
							)}
							{antonyms && antonyms?.length > 0 && (
								<SynonymsSubSection antonyms={antonyms} />
							)}
						</article>
					);
				}
			)}
		</>
	);
}
