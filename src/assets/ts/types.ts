export interface IAnswer {
    label: string;
    isRight?: boolean;
}

export interface IQuestion {
    label: string;
    answers: IAnswer[];
}