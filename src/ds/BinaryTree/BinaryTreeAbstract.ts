/* eslint @typescript-eslint/no-unused-vars: 0 */

import { TBinaryTreeVal, IBinaryTreeNode } from './BinaryTreeNode'

interface IBinaryTree {
    add: (val: TBinaryTreeVal) => IBinaryTreeNode
    contains: (val: TBinaryTreeVal) => boolean
    delete: (val: TBinaryTreeVal) => IBinaryTreeNode
}

abstract class BinaryTree implements IBinaryTree {
    public add = (val: TBinaryTreeVal): IBinaryTreeNode => {
        throw Error('Method not implemented!')
    }

    public contains = (val: TBinaryTreeVal): boolean => {
        throw Error('Method not implemented!')
    }

    public delete = (val: TBinaryTreeVal): IBinaryTreeNode => {
        throw Error('Method not implemented!')
    }
}

export default BinaryTree
