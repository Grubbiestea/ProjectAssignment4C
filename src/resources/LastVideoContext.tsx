import {createContext, Dispatch, SetStateAction} from "react";

const LastVideoContext = createContext<{
    lastVideo: string; setLastVideo: Dispatch<SetStateAction<string>>}>
    ({lastVideo: "", setLastVideo: () => {}})

export {LastVideoContext}