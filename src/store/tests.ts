import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseDirectory, readDir, readTextFile } from '@tauri-apps/api/fs';
import { TestStuct } from '../components/Test';
import { store } from './store';

interface TestsState {
    tests: TestStuct[];
}

(function generate() {
    readDir('tests', { dir: BaseDirectory.Resource, recursive: true })
    .then(async directory => {
        await directory
        .filter(file => file.name?.endsWith('.json'))
        .map(async file => {
            return new TestStuct(JSON.parse(await readTextFile(await file.path)));
        })
        .map(async test => {
            store.dispatch(addTest(await test));
        })
    })
})();

const initialState: TestsState = {
    tests: [],
}

export const testsSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        addTest: (state, action: PayloadAction<TestStuct>) => {
            state.tests.push(action.payload);
        }
    }
})

export const { addTest } = testsSlice.actions;

export default testsSlice.reducer;
