import { configureStore } from "@reduxjs/toolkit"
import importSlice from "../feature/importSlice";

export const store = configureStore({
    reducer: {
        import: importSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;