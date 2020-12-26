import {combineReducers} from 'redux'
import {MOVE_PLAYER, SET_LENGTH} from "./types";
import {Idx} from "../cfg";
import {isMovableThrow} from "../cfg";

interface RE{
    type: string,
    payload: any
}

let ppi = 0
let ppj = 0

const defaultFieldLen = 25

const check_move = (pi: number, pj: number) => {
    if(ppi+pi === defaultFieldLen || ppi+pi === -1) return false
    if(ppj+pj === defaultFieldLen || ppj+pj === -1) return false
    return true
}

const fieldRandGen = function(n = defaultFieldLen){
    const randomGenerate = () => {
        const el: number = Math.floor(Math.random() * Math.floor(5))
        switch (el){
            case 1:
            case 0:
                return Idx.TREE
            case 2:
                return Idx.STONE
            default:
                return Idx.AIR
        }
    }
    return [...Array(n)].map((el, idx1) => {
        return [...Array(n)].map((el, idx2) => {
            const rand = randomGenerate()
            if(idx1 === 0 && idx2 === 0) return Idx.PLAYER
            if(idx1 === 0 && idx2 === 1 && rand === Idx.STONE) return Idx.AIR
            return rand
        })
    })
}

const fieldReducer = (state: Idx[][] = fieldRandGen(), action: RE) => {
    switch (action.type){
        case SET_LENGTH:
            return fieldRandGen(action.payload)
        case MOVE_PLAYER:
            const clone = state.slice()
            if(
                check_move(action.payload.i, action.payload.j)
                && isMovableThrow.get(clone[ppi+action.payload.i][ppj+action.payload.j])
            ){
                clone[ppi][ppj] = Idx.AIR
                clone[ppi+=action.payload.i][ppj+=action.payload.j] = Idx.PLAYER
            }
            return clone
        default:
            return state
    }
}
export const rootReducer = combineReducers({
    field: fieldReducer
})

export type RootState = ReturnType<typeof rootReducer>