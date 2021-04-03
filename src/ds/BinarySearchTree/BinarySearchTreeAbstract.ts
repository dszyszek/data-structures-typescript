/* eslint @typescript-eslint/no-unused-vars: 0 */
/* eslint class-methods-use-this: 0 */

import { TBinarySearchTreeVal, IBinarySearchTreeNode } from './BinarySearchTreeNode'

export interface IBinarySearchTree {
    add: (val: TBinarySearchTreeVal) => IBinarySearchTreeNode
    contains: (val: TBinarySearchTreeVal) => boolean
    delete: (val: TBinarySearchTreeVal) => IBinarySearchTreeNode
    addMany: (values: TBinarySearchTreeVal[]) => IBinarySearchTreeNode
    readonly root: IBinarySearchTreeNode
}

abstract class BinaryTree implements IBinarySearchTree {
    public get root(): IBinarySearchTreeNode {
        throw Error('Getter not implemented!')
    }

    public add = (val: TBinarySearchTreeVal): IBinarySearchTreeNode => {
        throw Error('Method not implemented!')
    }

    public contains = (val: TBinarySearchTreeVal): boolean => {
        throw Error('Method not implemented!')
    }

    public delete = (val: TBinarySearchTreeVal): IBinarySearchTreeNode => {
        throw Error('Method not implemented!')
    }

    public addMany = (values: TBinarySearchTreeVal[]): IBinarySearchTreeNode => {
        throw Error('Method not implemented!')
    }
}

export default BinaryTree
