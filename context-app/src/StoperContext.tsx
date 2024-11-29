import React, {Dispatch, SetStateAction} from "react";

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

const StoperContext = React.createContext<{
    state: StoperType,
    dispatch: Dispatch<SetStateAction<StoperType>>
}>({
    state: initialState,
    dispatch: () => null
});

export default StoperContext;