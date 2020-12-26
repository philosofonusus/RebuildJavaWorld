export enum Idx{
    AIR= "⠀",
    TREE="#",
    STONE="@",
    APPLE="Ŏ",
    PLAYER="Q",
    STAR="\u272a",
    CHEST="\u2612"
}

export const isMovableThrow = new Map([[Idx.AIR, true]])