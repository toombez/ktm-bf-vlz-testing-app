import { configureStore } from '@reduxjs/toolkit';
import testsReducer from './reducers/tests';

export const store = configureStore({
    reducer: {
        tests: testsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
