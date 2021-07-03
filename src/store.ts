import {createContext} from "react";

const initialState = {
    name: "jack",
    edad: 35,
}

export type UserState = typeof initialState;