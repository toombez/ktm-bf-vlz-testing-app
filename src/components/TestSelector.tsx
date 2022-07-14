import { useState } from "react";
import { store } from "../store/store";
import Question from "./Question/Question";
import Test from "./Test/Test";
import TestSelectorTestCard from "./TestSelectorTestCard";

const TestSelector = () => {
    const [tests, setTests] = useState(store.getState().tests);

    store.subscribe(() => {
        setTests(store.getState().tests);
    })

    return (
        <div className="TestSelector">
            <div className="TestSelector__title">
                Выберете тести
            </div>
            <div className="TestSelector__tests">
                { tests.map((test, index) =>
                    <TestSelectorTestCard
                        test={test}
                        index={index}
                        key={index}
                    />
                ) }
            </div>
        </div>
    )
}

export default TestSelector;
