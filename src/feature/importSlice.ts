import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface importState {
    value: String
}
const initialState : importState = {
    value: "",
};

export const importSlice = createSlice({
    name: "import",
    initialState,
    reducers:  {
        importFile: (state, action: PayloadAction<String>) => {
            state.value=action.payload;
        },
    },
});


export const getFile = state => state.value;

export const { importFile } = importSlice.actions;
export default importSlice.reducer;