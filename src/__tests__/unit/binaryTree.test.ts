import BinaryTree from '../../ds/BinaryTree/BinaryTree'
import { IBinaryTree } from '../../ds/BinaryTree/BinaryTreeAbstract'
import { IBinaryTreeNode } from '../../ds/BinaryTree/BinaryTreeNode'

const MOCKED_STATE = {
    BINARY_TREE_STRUCTURE: [12, 1, 34, 22, 5],
}

describe('BinaryTree unit tests', () => {
    let binaryTree: IBinaryTree
    const { BINARY_TREE_STRUCTURE } = MOCKED_STATE

    beforeEach(() => {
        binaryTree = new BinaryTree(BINARY_TREE_STRUCTURE)
    })

    it('should create binary tree with mocked values (constructor + root getter test)', () => {
        const rootNode: IBinaryTreeNode = binaryTree.root

        expect(rootNode.val).toEqual(12)
        expect(rootNode.right?.val).toEqual(34)
        expect(rootNode.left?.val).toEqual(1)
        expect(rootNode.right?.left?.val).toEqual(22)
        expect(rootNode.right?.right).toEqual(null)
        expect(rootNode.left?.right?.val).toEqual(5)
        expect(rootNode.left?.left).toEqual(null)
    })

    it('should add new node to tree (.add() test)', () => {})
    it('should add new tree nodes (.addMany() test)', () => {})
    it('should return true after "contains" check (.contains() test)', () => {})
    it('should return false after "contains" check (.contains() test)', () => {})
    it('should delete tree node (.delete() test)', () => {})
})
