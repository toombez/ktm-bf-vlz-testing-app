export interface IAnswer {
    label: string;
    isRight?: boolean;
}

export interface IQuestion {
    label: string;
    answers: IAnswer[];
}

export interface ITest {
    title: string;
    questions: IQuestion[];
}

export interface ITestQuestionData {
    question: IQuestion;
    answers: IAnswer[];
}

export type TestQuestionsData = ITestQuestionData[];

export interface ITestResults {
    test: ITest;
    testQuestionsData: TestQuestionsData;
}
