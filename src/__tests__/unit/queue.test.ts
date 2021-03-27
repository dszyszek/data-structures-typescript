import Queue from '../../ds/Queue/Queue'
import { IQueue } from '../../ds/Queue/QueueAbstract'
import QueueNode, { IQueueNode } from '../../ds/Queue/QueueNode'

const MOCKED_STATE = {
    QUEUE_VALUES: [1, 2, 3, 4, 5],
    NEW_QUEUE_VAL: 100,
}

describe('Queue unit tests', () => {
    let queue: IQueue
    const mockQueueWith = (val: any[] | undefined = undefined): void => {
        queue = val ? new Queue(val) : new Queue()
    }

    afterEach(() => {
        queue = new Queue()
    })

    describe('Getters tests', () => {
        const { QUEUE_VALUES } = MOCKED_STATE
        beforeEach(() => {
            mockQueueWith(QUEUE_VALUES)
        })

        it('should return last node (.next test)', () => {
            const nextQueueVal: number = QUEUE_VALUES[QUEUE_VALUES.length - 1]
            const expectedNextVal: IQueueNode = new QueueNode(nextQueueVal)

            expect(queue.next).toEqual(expectedNextVal)
        })

        it('should return info if queue is empty (.isEmpty test )', () => {
            const expectedIsEmtyVal: boolean = false
            expect(queue.isEmpty).toEqual(expectedIsEmtyVal)
        })
    })
    describe('Public methods tests', () => {
        const { QUEUE_VALUES, NEW_QUEUE_VAL } = MOCKED_STATE
        beforeEach(() => {
            mockQueueWith(QUEUE_VALUES)
        })

        it('should push new value on the end of the queue (.push() test)', () => {
            const expectedQueueNext: IQueueNode = new QueueNode(NEW_QUEUE_VAL)
            queue.push(NEW_QUEUE_VAL)

            expect(queue.next).toEqual(expectedQueueNext)
        })
        it('should remove last value (.pop() test )', () => {
            const currentQueueNext: IQueueNode = queue.next
            const expectedQueueNext: IQueueNode = new QueueNode(
                QUEUE_VALUES[QUEUE_VALUES.length - 2]
            )
            queue.pop()

            expect(queue.next).not.toEqual(currentQueueNext)
            expect(queue.next).toEqual(expectedQueueNext)
        })
        it('should return popped value (.pop() test)', () => {
            const expectedPoppedValue: IQueueNode = new QueueNode(
                QUEUE_VALUES[QUEUE_VALUES.length - 1]
            )
            const poppedValue: IQueueNode = queue.pop()

            expect(expectedPoppedValue).toEqual(poppedValue)
        })
    })
})
