import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import testsReducer from './tests';

export const store = configureStore({
    reducer: {
        tests: testsReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
});
