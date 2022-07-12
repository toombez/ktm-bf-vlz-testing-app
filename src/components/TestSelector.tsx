import { useState } from "react";
import { store } from "../store/store";
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
                { tests.map((test, key) =>
                    <TestSelectorTestCard
                        test={test}
                        key={key}
                    />
                ) }
            </div>
        </div>
    )
}

export default TestSelector;
