import { PlayIcon } from '@heroicons/react/24/solid';

type PhoneticType = {
	text: string;
	audio: string;
};

interface EntryHeaderInterface {
	word: string;
	phonetics?: PhoneticType[];
}

export default function HeaderSection({
	word,
	phonetics,
}: EntryHeaderInterface) {
	return (
		<article>
			<h2 className='text-4xl'>{word}</h2>
			{/* <div className='flex gap-8'> */}
			<div className='flex gap-6'>
				{phonetics?.map((phonetic, idx) => {
					if (!phonetic.text || !phonetic.audio) {
						return;
					} else
						return (
							<div key={`${word}-${idx}`} className='flex gap-2 items-center'>
								<p className='text-primary'>{phonetic.text}</p>
								<button
									onClick={() => new Audio(phonetic.audio).play()}
									className='btn btn-sm btn-circle shadow-none bg-primary/20'
								>
									<PlayIcon className='size-4 text-primary' />
								</button>
							</div>
						);
				})}
			</div>
		</article>
	);
}
