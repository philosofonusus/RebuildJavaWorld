import {MOVE_PLAYER, SET_LENGTH} from "./types";

export const setFieldLen = (n: number) => {
    return{
        type: SET_LENGTH,
        payload: n
    }
}
export const setPlayerPos = (i: number, j: number) => {
    return{
        type: MOVE_PLAYER,
        payload: {i, j}
    }
}