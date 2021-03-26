/* eslint class-methods-use-this: 0 */
/* eslint @typescript-eslint/no-unused-vars: 0 */

import { IStackNode, TStackNodeVal } from './StackNode'
import { ILinkedList } from '../LinkedList/linkedList'

export interface IStack {
    readonly peak: IStackNode
    readonly isEmpty: Boolean
    push: (val: TStackNodeVal) => IStackNode
    pop: () => IStackNode
}

abstract class StackAbstract implements IStack {
    public get peak(): IStackNode {
        throw Error('Getter not implemented!')
    }

    public get isEmpty(): Boolean {
        throw Error('Getter not implemented!')
    }

    public push = (val: TStackNodeVal): ILinkedList => {
        throw Error('Method not implemented!')
    }

    public pop = (): IStackNode => {
        throw Error('Method not implemented!')
    }
}

export default StackAbstract
