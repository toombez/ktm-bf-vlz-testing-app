import { configureStore } from '@reduxjs/toolkit';
import testsReducer from './reducers/tests';

export const store = configureStore({
    reducer: {
        testsStore: testsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
