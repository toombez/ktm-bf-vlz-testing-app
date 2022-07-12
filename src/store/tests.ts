import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BaseDirectory, readDir, readTextFile } from '@tauri-apps/api/fs';
import { TestStruct } from '../components/Test';

const fetchTests = createAsyncThunk(
    'tests/fetchTests',
    async () => {
        const testsFiles = await readDir('tests', { dir: BaseDirectory.Resource, recursive: true });
        const tests = testsFiles
            .filter(file => file.name?.endsWith('.json'))
            .filter(file => !file.name?.startsWith('_'))
            .map(async (testFile) => {
                const test = JSON.parse(await readTextFile(testFile.path));
                return new TestStruct(test);
            });

        return await Promise.all(tests);
    }
)

export const testsSlice = createSlice({
    name: 'tests',
    initialState: [] as TestStruct[],
    reducers: {
        clear: (state) => {
            while (state.pop()) {}
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchTests.fulfilled, (state, action) => {
            testsSlice.caseReducers.clear(state);
            state.push(...action.payload);
        })
    },
})

export { fetchTests };

export default testsSlice.reducer;
