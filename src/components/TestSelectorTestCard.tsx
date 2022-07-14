import { Link } from "react-router-dom";
import { ITest } from "../assets/ts/types";

interface ITestSelectorTestCardProps {
    test: ITest;
    index: number;
}

const TestSelectorTestCard = ({ test, index }: ITestSelectorTestCardProps) => {
    return (
        <Link
            to={`/test/${index}`}
            className="TestSelectorTestCard"
        >
            <div className="TestSelectorTestCard__title">
                { test.title }
            </div>
            <div className="TestSelectorTestCard__questionCount">
                <span className="TestSelectorTestCard__questionCountLabel">
                    Вопросов:
                </span>
                <span className="TestSelectorTestCard__questionCountValue">
                    { test.questions.length }
                </span>
            </div>
        </Link>
    )
}

export default TestSelectorTestCard;
