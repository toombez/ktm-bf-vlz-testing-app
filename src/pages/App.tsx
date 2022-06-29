import { Route, Routes } from 'react-router-dom';
import TestSelector from '../components/TestSelector';
import Testing from './Testing';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<TestSelector />} />
                <Route path="/test/:id" element={<Testing />}></Route>
            </Routes>
        </div>
    );
}

export default App;
