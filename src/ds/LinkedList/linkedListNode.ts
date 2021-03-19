interface ILinkedListNode<T = any, U = any> {
    val: T
    next: U
}

type TPassedVal<T> = T | null
type TPassedNext<U> = U | null

class LinkedListNode<T, U> implements ILinkedListNode {
    public val: T | null

    public next: U | null

    constructor(passedVal: TPassedVal<T> = null, passedNext: TPassedNext<U> = null) {
        this.val = passedVal
        this.next = passedNext
    }
}

export default LinkedListNode
export { ILinkedListNode }
