import { useState } from "react";
import { store } from "../store/store";
import TestCard from "../components/TestCard/TestCard";

const TestSelect = () => {
    const [tests, setTests] = useState(store.getState().testsStore.tests);

    store.subscribe(() => {
        setTests(store.getState().testsStore.tests);
    })

    return (
        <div>
            {tests.map((test, index) => (
                <TestCard
                    test={test}
                    index={index}
                    key={index}
                />
            ))}
        </div>
    )
}

export default TestSelect;
