import { useId } from "react";
import { IAnswer } from "../assets/ts/types";

export class Answer implements IAnswer {
    public readonly label!: string;
    public readonly isRight: boolean = false;

    private _isSelected: boolean = false;
    
    constructor(answer: IAnswer) {
        Object.assign(this, answer)
    }

    public get isSelected(): boolean {
        return this._isSelected;
    }
    public toggle() {
        this._isSelected = !this._isSelected;
    }
}

interface ITestQuestionAnswerProps {
    answer: Answer;
}

const TestQuestionAnswer = ({ answer }: ITestQuestionAnswerProps) => {
    const answerId = useId();
    
    return (
        <div className="Answer">
            <input
                className="Answer__input"
                type="checkbox"
                id={answerId}
                onInput={() => {answer.toggle()}}
            />
            <label
                className="Answer__label"
                htmlFor={answerId}
            >
                {answer.label}
            </label>
        </div>
    )
}

export default TestQuestionAnswer;