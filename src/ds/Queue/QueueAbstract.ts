/* eslint class-methods-use-this: 0 */
/* eslint @typescript-eslint/no-unused-vars: 0 */

import { IQueueNode } from './QueueNode'

export interface IQueue {
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
}

export default QueueAbstract
