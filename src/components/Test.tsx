import { ITest } from "../assets/ts/types";
import TestQuestion, { Question } from './TestQuestion';
import { Answer } from "./TestQuestionAnswer";

export class TestStuct implements ITest {
    public readonly title: string;
    public readonly questions: Question[];
    
    constructor(test: ITest) {
        this.title = test.title;
        this.questions = test.questions.map(question => new Question(question));
    }

    public get Selected(): Answer[] {
        return this.questions.map(question => question.Selected).flat();
    }
    public get Right(): Answer[] {
        return this.questions.map(question => question.Right).flat();
    }
}

interface ITestProps {
    test: TestStuct;
}

const Test = ({ test }: ITestProps) => {
    return (
        <div className="Test">
            <div className="Test__title">
                { test.title }
            </div>
            <div className="Test__wrapper">
                {
                    test.questions.map((question, key) =>
                        <TestQuestion
                            question={question}
                            key={key}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Test;
