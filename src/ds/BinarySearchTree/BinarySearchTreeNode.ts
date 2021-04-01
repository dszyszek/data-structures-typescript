export type TBinarySearchTreeNodeVal = any
export interface IBinarySearchTreeNode {
    val: TBinarySearchTreeNodeVal
    left: IBinarySearchTreeNode | null
    right: IBinarySearchTreeNode | null
}

class BinarySearchTreeNode implements IBinarySearchTreeNode {
    public val: TBinarySearchTreeNodeVal | null = null

    public left: IBinarySearchTreeNode | null = null

    public right: IBinarySearchTreeNode | null = null

    constructor(val?: TBinarySearchTreeNodeVal) {
        this.val = val
    }
}

export default BinarySearchTreeNode
