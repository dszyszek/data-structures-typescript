export type TBinaryTreeVal = any
export interface IBinaryTreeNode {
    val: TBinaryTreeVal
    left: IBinaryTreeNode | null
    right: IBinaryTreeNode | null
}

class BinaryTreeNode implements IBinaryTreeNode {
    public val: TBinaryTreeVal

    public left: IBinaryTreeNode | null = null

    public right: IBinaryTreeNode | null = null

    constructor(val: TBinaryTreeVal = null, left?: TBinaryTreeVal, right?: TBinaryTreeVal) {
        this.val = val
        this.left = new BinaryTreeNode(left)
        this.right = new BinaryTreeNode(right)
    }
}

export default BinaryTreeNode
