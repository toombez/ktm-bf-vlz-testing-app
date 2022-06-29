import { Link } from "react-router-dom";
import { TestStruct } from "./Test"

interface ITestSelectorTestCardProps {
    test: TestStruct;
}

const TestSelectorTestCard = ({ test }: ITestSelectorTestCardProps) => {
    return (
        <Link
            to={`/test/${test.id}`}
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
                    { test.QuestionCount }
                </span>
            </div>
        </Link>
    )
}

export default TestSelectorTestCard;
