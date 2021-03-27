/* eslint class-methods-use-this: 0 */
/* eslint @typescript-eslint/no-unused-vars: 0 */

import { ILinkedList } from '../LinkedList/linkedList'
import { IQueueNode, TQueueVal } from './QueueNode'

export interface IQueue {
    push: (val: TQueueVal) => ILinkedList
    pop: () => IQueueNode
    readonly next: IQueueNode
    readonly isEmpty: boolean
}

abstract class QueueAbstract implements IQueue {
    public get next(): IQueueNode {
        throw Error('Getter not implemented!')
    }

    public get isEmpty(): boolean {
        throw Error('Getter not implemented!')
    }

    public push(val: TQueueVal): ILinkedList {
        throw Error('Method not implemented!')
    }

    public pop(): IQueueNode {
        throw Error('Method not implemented!')
    }
}

export default QueueAbstract
