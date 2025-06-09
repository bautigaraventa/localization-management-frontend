export interface FilterOptions {
    categories: string[];
};

// Languages could be stored in the DB too, but it's out of scope.
export enum Languages {
    EN = "en",
    ES = "es",
    PT = "pt",
}

export const LanguagesLabels: Record<Languages, string> = {
    [Languages.EN]: "English",
    [Languages.ES]: "Spanish",
    [Languages.PT]: "Portuguese",
}

export interface Project {
    id: string;
    name: string;
};