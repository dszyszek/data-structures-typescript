import BinarySearchTree from '../../ds/BinarySearchTree/BinarySearchTree'
import { IBinarySearchTree } from '../../ds/BinarySearchTree/BinarySearchTreeAbstract'
import { IBinarySearchTreeNode } from '../../ds/BinarySearchTree/BinarySearchTreeNode'

const MOCKED_STATE = {
    BINARY_TREE_STRUCTURE: [12, 1, 34, 22, 5],
    NEW_BINARY_TREE_VAL: 9,
    NEW_BINARY_TREE_VALS: [9, 14, 2],
    VALUE_NOT_FOUND: 900,
}

describe('BinarySearchTree unit tests', () => {
    let binarySearchTree: IBinarySearchTree
    let rootNode: IBinarySearchTreeNode
    const {
        BINARY_TREE_STRUCTURE,
        NEW_BINARY_TREE_VAL,
        NEW_BINARY_TREE_VALS,
        VALUE_NOT_FOUND,
    } = MOCKED_STATE

    beforeEach(() => {
        binarySearchTree = new BinarySearchTree(BINARY_TREE_STRUCTURE)
        rootNode = binarySearchTree.root
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
        binarySearchTree.add(NEW_BINARY_TREE_VAL)
        expect(rootNode.left?.right?.right?.val).toEqual(9)
    })
    it('should add new tree nodes (.addMany() test)', () => {
        binarySearchTree.addMany(NEW_BINARY_TREE_VALS)

        expect(rootNode.left?.right?.right?.val).toEqual(9)
        expect(rootNode.right?.left?.left?.val).toEqual(14)
        expect(rootNode.left?.right?.left?.val).toEqual(2)
    })
    it('should return true after "contains" check (.contains() test)', () => {
        binarySearchTree.add(NEW_BINARY_TREE_VAL)

        expect(binarySearchTree.contains(NEW_BINARY_TREE_VAL)).toEqual(true)
    })
    it('should return false after "contains" check (.contains() test)', () => {
        expect(binarySearchTree.contains(VALUE_NOT_FOUND)).toEqual(false)
    })
    it('should delete tree node (.delete() test)', () => {
        binarySearchTree.add(NEW_BINARY_TREE_VAL)
        binarySearchTree.delete(NEW_BINARY_TREE_VAL)
        expect(binarySearchTree.contains(NEW_BINARY_TREE_VAL)).toEqual(false)
    })
})
