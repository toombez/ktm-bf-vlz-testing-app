import { useState } from "react";
import { IAnswer, IQuestion } from "../../assets/ts/types";
import Answer from "../Answer/Answer";
import style from './Question.module.scss';

interface IQuestionProp {
    question: IQuestion;
    onChange?: (selectedAnswers: IAnswer[]) => void;
}

const Question = ({ question, onChange }: IQuestionProp) => {
    const [selectedAnswers, setSelectedAnswers] = useState<IAnswer[]>([]);

    const handleChange = (answer: IAnswer) => {
        if (!selectedAnswers.includes(answer)) selectedAnswers.push(answer)
        else setSelectedAnswers([
            ...selectedAnswers
                .filter(selectedAnswer => selectedAnswer !== answer)
        ])

        if (onChange) onChange(selectedAnswers);
    }

    return (
        <div className={style.Question}>
            <h2 className="style.Question__label">
                { question.label }
            </h2>
            <div className="style.Question_answers">
                {question.answers.map((answer, index) => (
                    <Answer
                        answer={answer}
                        key={index}
                        onChange={handleChange}
                        className={style.Question__answer}
                    />
                ))}
            </div>
        </div>
    )
}

export default Question;
