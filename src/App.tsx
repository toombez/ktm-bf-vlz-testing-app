import { Route, Routes } from 'react-router-dom';
import TestSelector from './components/TestSelector';
import { fetchTests } from './store/reducers/tests';
import { store } from './store/store';
import Testing from './pages/Testing';

function App() {
    store.dispatch(fetchTests())

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<TestSelector />} />
                <Route path="/test/:id" element={<Testing />} />
            </Routes>
        </div>
    );
}

export default App;