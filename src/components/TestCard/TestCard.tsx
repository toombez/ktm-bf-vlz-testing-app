import { Link } from "react-router-dom";
import { ITest } from "../../assets/ts/types";
import style from './TestCard.module.scss';

interface ITestCard {
    test: ITest;
    index: number;
}

const TestCard = ({ test, index }: ITestCard) => {
    const questionCount = test.questions.length;

    return (
        <Link
            to={`/test/${index}`}
            className={style.TestCard}
        >
            <h2 className={style.TestCard__title}>
                { test.title }
            </h2>
            <span className={style.TestCard__questionCount}>
                Количество вопросов: { questionCount }
            </span>
        </Link>
    )
}

export default TestCard;
