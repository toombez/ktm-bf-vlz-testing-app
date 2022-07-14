import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import { store } from "../store/store";
import Test from "../components/Test/Test";

const Testing = () => {
    const { id } = useParams();
    const [test, setTest] = useState(store.getState().tests.at(+(id as string)))

    store.subscribe(() => {
        setTest(store.getState().tests[+(id as string)]);
    })

    return (
        <div className="Testing">
            <Link
                className="Testing__backButton"
                to='/'
            >
                Назад
            </Link>
            {test !== undefined ?
                <Test test={test} /> :
                <h1>Такого теста нет</h1>
            }
        </div>
    )
}

export default Testing;
