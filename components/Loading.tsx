import { SyncLoader } from 'react-spinners';

export default function Loading() {
	return (
		<div className='h-[65%] flex items-center justify-center'>
			<SyncLoader className='*:bg-primary!' />
		</div>
	);
}

// TODO: fancy skeleton loader
// https://github.com/danilowoz/react-content-loader
