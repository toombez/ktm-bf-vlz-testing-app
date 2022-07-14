import { Link, useParams } from "react-router-dom"
import Test from "../components/Test/Test";
import { store } from "../store/store";

const Testing = () => {
    let tests = store.getState().tests;

    const { id } = useParams();
    const test = tests[Number.parseInt(id as string)];

    return (
        <div className="Testing">
            {/* 
                reloading this page breaks up app,
                cause tests has not loaded
            */}
            <Link
                className="Testing__backButton"
                to='/'
            >
                Назад
            </Link>
            <Test test={test} />
        </div>
    )
}

export default Testing;
