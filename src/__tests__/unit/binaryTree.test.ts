import BinaryTree from '../../ds/BinaryTree/BinaryTree'
import { IBinaryTree } from '../../ds/BinaryTree/BinaryTreeAbstract'
import { IBinaryTreeNode } from '../../ds/BinaryTree/BinaryTreeNode'

const MOCKED_STATE = {
    BINARY_TREE_STRUCTURE: [12, 1, 34, 22, 5],
    NEW_BINARY_TREE_VAL: 9,
    NEW_BINARY_TREE_VALS: [9, 14, 2],
    VALUE_NOT_FOUND: 900,
}

describe('BinaryTree unit tests', () => {
    let binaryTree: IBinaryTree
    let rootNode: IBinaryTreeNode
    const {
        BINARY_TREE_STRUCTURE,
        NEW_BINARY_TREE_VAL,
        NEW_BINARY_TREE_VALS,
        VALUE_NOT_FOUND,
    } = MOCKED_STATE

    beforeEach(() => {
        binaryTree = new BinaryTree(BINARY_TREE_STRUCTURE)
        rootNode = binaryTree.root
    })

    it('should create binary tree with mocked values (constructor + root getter test)', () => {
        expect(rootNode.val).toEqual(12)
        expect(rootNode.right?.val).toEqual(34)
        expect(rootNode.left?.val).toEqual(1)
        expect(rootNode.right?.left?.val).toEqual(22)
        expect(rootNode.right?.right).toEqual(null)
        expect(rootNode.left?.right?.val).toEqual(5)
        expect(rootNode.left?.left).toEqual(null)
    })

    it('should add new node to tree (.add() test)', () => {
        binaryTree.add(NEW_BINARY_TREE_VAL)
        expect(rootNode.left?.right?.right?.val).toEqual(9)
    })
    it('should add new tree nodes (.addMany() test)', () => {
        binaryTree.addMany(NEW_BINARY_TREE_VALS)

        expect(rootNode.left?.right?.right?.val).toEqual(9)
        expect(rootNode.right?.left?.left?.val).toEqual(14)
        expect(rootNode.left?.right?.left?.val).toEqual(2)
    })
    it('should return true after "contains" check (.contains() test)', () => {
        binaryTree.add(NEW_BINARY_TREE_VAL)

        expect(binaryTree.contains(NEW_BINARY_TREE_VAL)).toEqual(true)
    })
    it('should return false after "contains" check (.contains() test)', () => {
        expect(binaryTree.contains(VALUE_NOT_FOUND)).toEqual(false)
    })
    it('should delete tree node (.delete() test)', () => {
        binaryTree.add(NEW_BINARY_TREE_VAL)
        binaryTree.delete(NEW_BINARY_TREE_VAL)
        expect(binaryTree.contains(NEW_BINARY_TREE_VAL)).toEqual(false)
    })
})
