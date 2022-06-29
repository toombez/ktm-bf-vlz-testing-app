import { IQuestion } from "../assets/ts/types";
import TestQuestionAnswer, { Answer } from "./TestQuestionAnswer";

export class Question implements IQuestion {
    public readonly label!: string;
    public readonly answers: Answer[] = [];

    constructor({ answers, label }: IQuestion) {
        this.label = label;
        answers.forEach(answer => this.answers.push(new Answer(answer)))
    }

    get Selected(): Answer[] {
        return this.answers.filter(answer => answer.isSelected);
    }
    get Right(): Answer[] {
        return this.answers.filter(answer => answer.isRight);
    }
}

interface ITestQuestionProps {
    question: Question;
}

const TestQuestion = ({ question }: ITestQuestionProps) => {
    return (
        <div className="Question">
            { question.label }
            <div className="Question__answers">
                {question.answers.map((answer, key) => (
                    <TestQuestionAnswer
                        answer={answer}
                        key={key}
                    />
                ))}
            </div>
        </div>
    )
}

export default TestQuestion;
