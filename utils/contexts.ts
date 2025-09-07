import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type FontType = {
	fontName: 'Sans' | 'Sans-serif' | 'Monospaced';
	fontSlug: 'font-sans' | 'font-serif' | 'font-mono';
};

interface FontInterface extends FontType {
	setFont: (font: FontType) => void;
}

interface DarkmodeInterface {
	isDarkmode: boolean;
	toggleDarkmode: () => void;
}

export const useFontContext = create<FontInterface>()(
	devtools(
		persist(
			(set) => ({
				fontName: 'Sans',
				fontSlug: 'font-sans',
				setFont: (font) =>
					set(() => ({
						fontName: font.fontName,
						fontSlug: font.fontSlug,
					})),
			}),
			{ name: 'font' }
		)
	)
);

// function getInitialState(): boolean {
// 	const store = JSON.parse(localStorage.getItem('darkMode') || '');
// 	return store.state.isDarkmode;
// }

export const useDarkmodeContext = create<DarkmodeInterface>()(
	devtools(
		persist(
			(set) => ({
				isDarkmode: true,
				// isDarkmode: getInitialState() || true,
				// setDarkmode: (input) => set(() => ({ isDarkmode: input })),
				toggleDarkmode: () =>
					set((state) => ({ isDarkmode: !state.isDarkmode })),
			}),
			{ name: 'darkMode' }
		)
	)
);
