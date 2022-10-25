import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface importState {
    value: string
}
const initialState : importState = {
    value: "",
};

export const importSlice = createSlice({
    name: "import",
    initialState,
    reducers:  {
        importFile: (state, action: PayloadAction<string>) => {
            state.value=action.payload;
        },
    },
});


export const getFile = state => state.value;

export const { importFile } = importSlice.actions;
export default importSlice.reducer;