import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import watcherSlice from "./feature/watcher/watcherSlice.ts";

export const store = configureStore({
    reducer: {
        watcher: watcherSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;