/* eslint no-param-reassign: 0 */

import BinarySearchTreeAbstract from './BinarySearchTreeAbstract'
import BinarySearchTreeNode, {
    TBinarySearchTreeVal,
    IBinarySearchTreeNode,
} from './BinarySearchTreeNode'

class BinarySearchTree extends BinarySearchTreeAbstract {
    private binarySearchTree: IBinarySearchTreeNode = new BinarySearchTreeNode()

    constructor(passedVals?: TBinarySearchTreeVal[]) {
        super()

        if (passedVals?.length) {
            this.addMany(passedVals)
        }
    }

    public get root(): IBinarySearchTreeNode {
        return this.binarySearchTree
    }

    private deleteRecursively = (
        val: TBinarySearchTreeVal,
        tree: IBinarySearchTreeNode
    ): IBinarySearchTreeNode => {
        if (!!tree.left && val < tree.val) {
            if (tree.left.val === val) {
                tree.left = null
                return this.binarySearchTree
            }
            return this.deleteRecursively(val, tree.left)
        }
        if (!!tree.right && val > tree.val) {
            if (tree.right.val === val) {
                tree.right = null
                return this.binarySearchTree
            }
            return this.deleteRecursively(val, tree.right)
        }

        if (val === tree.val) {
            tree.val = null
        }

        return this.binarySearchTree
    }

    private checkIfContainsRecursively = (
        val: TBinarySearchTreeVal,
        tree: IBinarySearchTreeNode
    ): boolean => {
        if (tree.val === val) {
            return true
        }

        if (tree.val > val && !!tree.left) {
            return this.checkIfContainsRecursively(val, tree.left)
        }

        if (tree.val < val && !!tree.right) {
            return this.checkIfContainsRecursively(val, tree.right)
        }

        return false
    }

    private addRecursively = (
        node: IBinarySearchTreeNode,
        tree: IBinarySearchTreeNode
    ): IBinarySearchTreeNode => {
        if (tree.val === null) {
            this.binarySearchTree = node
            return this.binarySearchTree
        }

        if (node.val < tree.val) {
            // assign to left

            if (!tree.left) {
                tree.left = node
                return this.binarySearchTree
            }
            return this.addRecursively(node, tree.left)
        }

        if (node.val > tree.val) {
            // assign to right

            if (!tree.right) {
                tree.right = node
                return this.binarySearchTree
            }
            return this.addRecursively(node, tree.right)
        }

        // case: node.val === tree.val -> value is already in tree
        return this.binarySearchTree
    }

    public add = (val: TBinarySearchTreeVal): IBinarySearchTreeNode => {
        const convertedToBinaryTreeNode: IBinarySearchTreeNode = new BinarySearchTreeNode(val)
        const updatedTree: IBinarySearchTreeNode = this.addRecursively(
            convertedToBinaryTreeNode,
            this.binarySearchTree
        )
        return updatedTree
    }

    public contains = (val: TBinarySearchTreeVal): boolean => {
        const isValueInTree = this.checkIfContainsRecursively(val, this.binarySearchTree)
        return isValueInTree
    }

    public delete = (val: TBinarySearchTreeVal): IBinarySearchTreeNode => {
        const returnedTree: IBinarySearchTreeNode = this.deleteRecursively(
            val,
            this.binarySearchTree
        )
        return returnedTree
    }

    public addMany = (values: TBinarySearchTreeVal[]): IBinarySearchTreeNode => {
        values.forEach((val) => this.add(val))
        return this.binarySearchTree
    }
}

export default BinarySearchTree
