/* eslint @typescript-eslint/no-unused-vars: 0 */
/* eslint class-methods-use-this: 0 */

import { TBinaryTreeVal, IBinaryTreeNode } from './BinaryTreeNode'

export interface IBinaryTree {
    add: (val: TBinaryTreeVal) => IBinaryTreeNode
    contains: (val: TBinaryTreeVal) => boolean
    delete: (val: TBinaryTreeVal) => IBinaryTreeNode
    addMany: (values: TBinaryTreeVal[]) => IBinaryTreeNode
    readonly root: IBinaryTreeNode
}

abstract class BinaryTree implements IBinaryTree {
    public get root(): IBinaryTreeNode {
        throw Error('Getter not implemented!')
    }

    public add = (val: TBinaryTreeVal): IBinaryTreeNode => {
        throw Error('Method not implemented!')
    }

    public contains = (val: TBinaryTreeVal): boolean => {
        throw Error('Method not implemented!')
    }

    public delete = (val: TBinaryTreeVal): IBinaryTreeNode => {
        throw Error('Method not implemented!')
    }

    public addMany = (values: TBinaryTreeVal[]): IBinaryTreeNode => {
        throw Error('Method not implemented!')
    }
}

export default BinaryTree
