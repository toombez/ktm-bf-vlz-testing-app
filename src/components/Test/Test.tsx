import { Link } from "react-router-dom";
import {
    IAnswer,
    IQuestion,
    ITest,
    ITestQuestionData,
    ITestResults,
    TestQuestionsData
} from "../../assets/ts/types";
import Question from "../Question/Question";
import style from './Test.module.scss';

interface ITestProp {
    test: ITest;
}

const Test = ({ test }: ITestProp) => {
    const testQuestionsData: TestQuestionsData = Array.from(
        test.questions.map(question => {
            const testQuestionData: ITestQuestionData = {
                answers: [],
                question
            }

            return testQuestionData;
        })
    )

    const handleChange = (question: IQuestion, selectedAnswers: IAnswer[]) => {
        const newTestQuestionData: ITestQuestionData = {
            answers: selectedAnswers,
            question
        }

        const testQuestionsDataIndex = testQuestionsData
            .findIndex(testQuestionData => testQuestionData.question === question);

        testQuestionsData[testQuestionsDataIndex] = newTestQuestionData;
    }

    const finishTest = () => {
        const result: ITestResults = {
            test: test,
            testQuestionsData: testQuestionsData
        }
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
