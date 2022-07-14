import { useState } from "react";
import { Link } from "react-router-dom";
import { store } from "../store/store";

const TestResult = () => {
    const [result] = useState(store.getState().testsStore.lastResult);

    const questionsCount = result?.test.questions.length;

    const rightQuestionsCount = result?.testQuestionsData
        /**
         * TODO
         * use classes here
         */
        .reduce((count, testQuestionData, index) => {
            const rightAnswers = testQuestionData.question.answers
                .filter(answer => answer.isRight);
            const selectedRightAnswers = testQuestionData.answers
                .filter(answer => rightAnswers.includes(answer));

            const haveMistake = rightAnswers.length === selectedRightAnswers.length;
            const selectAnswersCountEqualsRight = rightAnswers.length === testQuestionData.answers.length;

            return haveMistake && selectAnswersCountEqualsRight ? count + 1 : count;
        }, 0);

    return (
        <div>
            <Link to="/">На главную</Link>
            <div>
                <h2>
                    { result?.test.title }
                </h2>
                <div>
                    Результат <span>{rightQuestionsCount}</span> из <span>{questionsCount}</span>
                </div>
            </div>
            
        </div>
    )
}

export default TestResult;
