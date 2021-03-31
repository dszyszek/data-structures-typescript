/* eslint no-param-reassign: 0 */

import BinaryTreeAbstract from './BinaryTreeAbstract'
import BinaryTreeNode, { TBinaryTreeVal, IBinaryTreeNode } from './BinaryTreeNode'

class BinaryTree extends BinaryTreeAbstract {
    private binaryTree: IBinaryTreeNode = new BinaryTreeNode()

    constructor(passedVals?: TBinaryTreeVal[]) {
        super()

        if (passedVals?.length) {
            this.addMany(passedVals)
        }
    }

    public get root(): IBinaryTreeNode {
        return this.binaryTree
    }

    private deleteRecursively = (val: TBinaryTreeVal, tree: IBinaryTreeNode): IBinaryTreeNode => {
        if (!!tree.left && val < tree.val) {
            if (tree.left.val === val) {
                tree.left = null
                return this.binaryTree
            }
            return this.deleteRecursively(val, tree.left)
        }
        if (!!tree.right && val > tree.val) {
            if (tree.right.val === val) {
                tree.right = null
                return this.binaryTree
            }
            return this.deleteRecursively(val, tree.right)
        }

        if (val === tree.val) {
            tree.val = null
        }

        return this.binaryTree
    }

    private checkIfContainsRecursively = (val: TBinaryTreeVal, tree: IBinaryTreeNode): boolean => {
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

    private addRecursively = (node: IBinaryTreeNode, tree: IBinaryTreeNode): IBinaryTreeNode => {
        if (tree.val === null) {
            this.binaryTree = node
            return this.binaryTree
        }

        if (node.val < tree.val) {
            // assign to left

            if (!tree.left) {
                tree.left = node
                return this.binaryTree
            }
            return this.addRecursively(node, tree.left)
        }

        if (node.val > tree.val) {
            // assign to right

            if (!tree.right) {
                tree.right = node
                return this.binaryTree
            }
            return this.addRecursively(node, tree.right)
        }

        // case: node.val === tree.val -> value is already in tree
        return this.binaryTree
    }

    public add = (val: TBinaryTreeVal): IBinaryTreeNode => {
        const convertedToBinaryTreeNode: IBinaryTreeNode = new BinaryTreeNode(val)
        const updatedTree: IBinaryTreeNode = this.addRecursively(
            convertedToBinaryTreeNode,
            this.binaryTree
        )
        return updatedTree
    }

    public contains = (val: TBinaryTreeVal): boolean => {
        const isValueInTree = this.checkIfContainsRecursively(val, this.binaryTree)
        return isValueInTree
    }

    public delete = (val: TBinaryTreeVal): IBinaryTreeNode => {
        const returnedTree: IBinaryTreeNode = this.deleteRecursively(val, this.binaryTree)
        return returnedTree
    }

    public addMany = (values: TBinaryTreeVal[]): IBinaryTreeNode => {
        values.forEach((val) => this.add(val))
        return this.binaryTree
    }
}

export default BinaryTree
