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

    constructor(val: TBinaryTreeVal = null) {
        this.val = val
        this.left = null
        this.right = null
    }
}

export default BinaryTreeNode
