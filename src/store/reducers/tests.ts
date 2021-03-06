import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseDirectory, readDir, readTextFile } from '@tauri-apps/api/fs';
import { ITest, ITestResults } from '../../assets/ts/types';

interface ITestsStore {
    tests: ITest[];
    lastResult: ITestResults | undefined;
}

const fetchTests = createAsyncThunk(
    'tests/fetchTests',
    async () => {
        const testsFiles = await readDir('tests', { dir: BaseDirectory.Resource, recursive: true });
        const tests = testsFiles
            .filter(file => file.name?.endsWith('.json'))
            .filter(file => !file.name?.startsWith('_'))
            .map(async (testFile) => {
                const test = JSON.parse(await readTextFile(testFile.path));
                return test as ITest;
            });

        return await Promise.all(tests);
    }
)

export const testsSlice = createSlice({
    name: 'tests',
    initialState: {
        lastResult: undefined,
        tests: []
    } as ITestsStore,
    reducers: {
        clear: (state) => {
            while (state.tests.pop()) {}
        },
        setLastResult: (state, action: PayloadAction<ITestResults>) => {
            state.lastResult = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchTests.fulfilled, (state, action) => {
            testsSlice.caseReducers.clear(state);
            state.tests.push(...action.payload);
        })
    },
})

export const { setLastResult } = testsSlice.actions;

export { fetchTests };

export default testsSlice.reducer;
