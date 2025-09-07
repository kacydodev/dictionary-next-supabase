import { SyncLoader } from 'react-spinners';

export default function Loading() {
	return (
		<div className='h-[65%] flex items-center justify-center'>
			<SyncLoader color={'red'} cssOverride={{ opacity: '70%' }} />
		</div>
	);
}

// TODO: fancy skeleton loader
// https://github.com/danilowoz/react-content-loader
