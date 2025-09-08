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

export const useDarkmodeContext = create<DarkmodeInterface>()(
	devtools(
		persist(
			(set) => ({
				// TODO: fix issue with flashing darkmode on refresh
				// set initial state to stored state
				isDarkmode: true,
				toggleDarkmode: () =>
					set((state) => ({ isDarkmode: !state.isDarkmode })),
			}),
			{ name: 'darkMode' }
		)
	)
);
