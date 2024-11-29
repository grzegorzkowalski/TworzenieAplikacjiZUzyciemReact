import {createSlice} from "@reduxjs/toolkit";

export type StoperType = {
    "isCounting": boolean,
    "value": number,
    "list": number[]
}

export const initialState: StoperType = {
    "isCounting": false,
    "value": 0,
    "list": []
}

export const watcherSlice = createSlice({
   name: 'watcher',
   initialState,
   reducers: {
       increment: (state) => {
           state.value += 1;
       },
       start: (state) => {
           state.isCounting = true;
       },
       stop: (state) => {
           state.isCounting = false;
       },
       addToList: (state) => {
           state.list.push(state.value)
       },
   }
});

export const {
    increment,
    start,
    stop,
    addToList
} = watcherSlice.actions;

export default watcherSlice.reducer;