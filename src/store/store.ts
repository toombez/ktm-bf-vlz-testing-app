import { configureStore } from '@reduxjs/toolkit';
import testsReducer from './tests';

export const store = configureStore({
    reducer: {
        tests: testsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
