import StackAbstract from './StackAbstract'
import StackNode, { IStackNode, TStackNodeVal } from './StackNode'
import LinkedList, { ILinkedList } from '../LinkedList/linkedList'

type TInput = Array<any>

class Stack extends StackAbstract {
    private stack: ILinkedList = new LinkedList()

    constructor(inputArr?: TInput) {
        super()
        if (inputArr?.length) {
            const convertedToStackNodes = inputArr.map((val) => new StackNode(val))
            this.stack.addMany(convertedToStackNodes)
        }
    }

    public get peak(): IStackNode {
        return this.stack.head.val
    }

    public get isEmpty(): Boolean {
        return !!this.stack.length
    }

    public push = (val: TStackNodeVal): ILinkedList => {
        const convertedToStackNode: IStackNode = new StackNode(val)
        this.stack.insert(0, convertedToStackNode)

        return this.stack
    }

    public pop = (): IStackNode => {
        const firstVal: IStackNode = this.stack.head.val
        this.stack.shift()

        return firstVal
    }
}

export default Stack
