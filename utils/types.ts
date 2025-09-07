export type PhoneticType = {
	text: string;
	audio: string;
};

export type DefinitionType = {
	definition: string;
	example: string;
	synonyms?: string[];
	antonyms?: string[];
};

export interface Entry {
	word: string;
	phonetics?: PhoneticType[];
	meanings: {
		partOfSpeech: string;
		definitions: DefinitionType[];
		synonyms?: string[];
		antonyms?: string[];
	}[];
	sourceUrls: string[];
}

export type FontType = {
	fontName: 'Sans' | 'Sans-serif' | 'Monospaced';
	fontSlug: 'font-sans' | 'font-serif' | 'font-mono';
};
