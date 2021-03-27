import QueueAbstract from './QueueAbstract'
import QueueNode, { TQueueVal, IQueueNode } from './QueueNode'
import LinkedList, { ILinkedList } from '../LinkedList/linkedList'
import { ILinkedListNode } from '../LinkedList/linkedListNode'

class Queue extends QueueAbstract {
    private queue: ILinkedList = new LinkedList()

    constructor(passedArrayOfValues?: TQueueVal[]) {
        super()
        if (passedArrayOfValues) {
            passedArrayOfValues.forEach((val) => {
                const convertedToStackNode: IQueueNode = new QueueNode(val)
                this.queue.add(convertedToStackNode)
            })
        }
    }

    private getLastNode(): ILinkedListNode {
        return this.queue.lastNode
    }

    public get next(): IQueueNode {
        return this.getLastNode().val
    }

    public get isEmpty(): boolean {
        return !this.queue.length
    }

    public push(val: TQueueVal): ILinkedList {
        const convertedToQueueNode: IQueueNode = new QueueNode(val)
        this.queue.add(convertedToQueueNode)
        return this.queue
    }

    public pop(): IQueueNode {
        const removedLastVal: IQueueNode = this.getLastNode().val
        this.queue.pop()
        return removedLastVal
    }
}

export default Queue
