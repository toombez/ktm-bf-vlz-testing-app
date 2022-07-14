import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';
import './assets/scss/global.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { fetchTests } from './store/reducers/tests';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

store.dispatch(fetchTests())

root.render(
    <React.StrictMode>
        <Provider store={store} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
