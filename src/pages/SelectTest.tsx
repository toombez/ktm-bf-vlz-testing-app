import TestCard from "../components/TestCard/TestCard";
import { store } from "../store/store";

const TestSelect = () => {
    const tests = store.getState().tests;

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
