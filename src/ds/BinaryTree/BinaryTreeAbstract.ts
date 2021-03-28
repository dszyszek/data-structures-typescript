/* eslint @typescript-eslint/no-unused-vars: 0 */

import { TBinaryTreeVal, IBinaryTreeNode } from './BinaryTreeNode'

interface IBinaryTree {
    addNode: (val: TBinaryTreeVal) => IBinaryTreeNode
}

abstract class BinaryTree implements IBinaryTree {
    public addNode = (val: TBinaryTreeVal): IBinaryTreeNode => {
        throw Error('Method not implemented!')
    }
}

export default BinaryTree
