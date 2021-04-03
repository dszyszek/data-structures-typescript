export type TBinarySearchTreeVal = any
export interface IBinarySearchTreeNode {
    val: TBinarySearchTreeVal
    left: IBinarySearchTreeNode | null
    right: IBinarySearchTreeNode | null
}

class BinarySearchTreeNode implements IBinarySearchTreeNode {
    public val: TBinarySearchTreeVal

    public left: IBinarySearchTreeNode | null = null

    public right: IBinarySearchTreeNode | null = null

    constructor(val: TBinarySearchTreeVal = null) {
        this.val = val
    }
}

export default BinarySearchTreeNode
