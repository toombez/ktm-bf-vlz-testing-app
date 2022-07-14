import { Route, Routes } from 'react-router-dom';
import { fetchTests } from './store/reducers/tests';
import { store } from './store/store';
import Testing from './pages/Testing';
import SelectTest from './pages/SelectTest'
import TestResult from './pages/TestResult';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<SelectTest />} />
                <Route path="/test/:id" element={<Testing />} />
                <Route path="/results/" element={<TestResult />} />
            </Routes>
        </div>
    );
}

export default App;
