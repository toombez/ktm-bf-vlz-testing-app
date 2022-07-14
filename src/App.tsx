import { Route, Routes } from 'react-router-dom';
import { fetchTests } from './store/reducers/tests';
import { store } from './store/store';
import Testing from './pages/Testing';
import SelectTest from './pages/SelectTest'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<SelectTest />} />
                <Route path="/test/:id" element={<Testing />} />
            </Routes>
        </div>
    );
}

export default App;
