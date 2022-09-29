import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface importState {
    value: File[]
}
const initialState : importState = {
    value: [],
};

export const importSlice = createSlice({
    name: "import",
    initialState,
    reducers:  {
        importFile: (state, action: PayloadAction<File>) => {
            state.value.push(action.payload);
        },
    },
});

export const { importFile } = importSlice.actions;
export default importSlice.reducer;