import { IAnswer, IQuestion, ITest } from "../../assets/ts/types";
import Question from "../Question/Question";
import style from './Test.module.scss';

interface ITestProp {
    test: ITest;
}

const Test = ({ test }: ITestProp) => {
    const selectedAnswersInQuestion = new Map<IQuestion, IAnswer[]>(
        test.questions.map(question => [question, []])
    );

    const handleChange = (question: IQuestion, selectedAnswers: IAnswer[]) => {
        selectedAnswersInQuestion.set(question, selectedAnswers);
    }

    return (
        <div className={style.Test}>
            <h1 className={style.Test__title}>
                Тест "{ test.title }"
            </h1>
            <div className={style.Test__questions}>
                {test.questions.map((question, index) => (
                    <Question
                        question={question}
                        key={index}
                        onChange={handleChange}
                    />
                ))}
            </div>
            {/* //TODO add finish test function */}
            <button>Закончить тест</button>
        </div>
    )
}

export default Test;
