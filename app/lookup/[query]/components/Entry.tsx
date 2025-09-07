import DefinitionSection from './DefinitionSection';
import HeaderSection from './HeaderSection';
import type { Entry } from '@/utils/types';
import SourceSection from './SourceSection';

export default function Entry({ data }: { data: Entry }) {
	// console.log('data:', data);
	const { word, phonetics, meanings, sourceUrls } = data;
	return (
		<section id='entry'>
			<HeaderSection word={word} phonetics={phonetics} />
			<DefinitionSection meanings={meanings} />
			<SourceSection sourceUrls={sourceUrls} />
		</section>
	);
}
