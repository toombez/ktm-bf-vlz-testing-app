import { Link } from "react-router-dom";
import { IAnswer, IQuestion, ITest, ITestResults, SelectedAnswersMap } from "../../assets/ts/types";
import Question from "../Question/Question";
import style from './Test.module.scss';

interface ITestProp {
    test: ITest;
}

const Test = ({ test }: ITestProp) => {
    const selectedAnswersInQuestion: SelectedAnswersMap = new Map(
        test.questions.map(question => [question, []])
    );

    const handleChange = (question: IQuestion, selectedAnswers: IAnswer[]) => {
        selectedAnswersInQuestion.set(question, selectedAnswers);
    }

    const finishTest = () => {
        const results = {
            answers: selectedAnswersInQuestion,
            test: test,
        } as ITestResults;
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
            <Link
                to='/results/'
                onClick={finishTest}
            >
                Закончить тест
            </Link>
        </div>
    )
}

export default Test;
