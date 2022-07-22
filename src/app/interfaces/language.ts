export interface LanguageResult {
  data: Languages[];
  meta: Meta;
}

export interface Meta {
  page: number;
}

export interface Languages {
  id: number;
  name: string;
  description: string;
  year: number;
}
