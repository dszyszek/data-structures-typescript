export type TStackNodeVal = any
export interface IStackNode {
    val: TStackNodeVal
}

class StackNode implements IStackNode {
    public val: TStackNodeVal

    constructor(val: TStackNodeVal) {
        this.val = val
    }
}

export default StackNode
