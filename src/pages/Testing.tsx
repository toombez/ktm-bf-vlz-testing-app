import { Link, useParams } from "react-router-dom"
import Test, { TestStruct } from "../components/Test";
import { store } from "../store/store";

const Testing = () => {
    let tests = store.getState().tests.tests;

    const { id } = useParams();
    const test = tests.find(test => test.id === id) as TestStruct;

    return (
        <div className="Testing">
            {/* 
                reloading this page breaks up app,
                cause tests has not loaded
            */}
            <Link
                className="Testing__backButton"
                to='/'
                onClick={() => tests.map(test => test.clear())}
            >
                Назад
            </Link>
            <Test test={test} />
        </div>
    )
}

export default Testing;
