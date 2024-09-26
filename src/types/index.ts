export interface IQuestion {
    id: string;
    question: string;
    answer: string;
    options: string[];
}

export type TAnswer = string | null;
