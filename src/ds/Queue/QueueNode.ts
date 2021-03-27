export interface IQueueNode {}
export type TQueueVal = any

class QueueNode implements IQueueNode {
    public val: TQueueVal

    constructor(passedVal: TQueueVal) {
        this.val = passedVal
    }
}

export default QueueNode
