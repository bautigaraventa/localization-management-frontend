export interface FilterOptions {
    categories: string[];
};

export enum Languages {
    EN = "en",
    ES = "es",
    PT = "pt",
}

export const LanguagesLabels: Record<Languages, string> = {
    [Languages.EN]: "🇺🇸 English",
    [Languages.ES]: "🇪🇸 Español",
    [Languages.PT]: "🇧🇷 Português",
}

export interface Project {
    id: string;
    name: string;
};