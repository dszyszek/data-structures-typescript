import Queue from '../../ds/Queue/Queue'
import { IQueue } from '../../ds/Queue/QueueAbstract'

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

        it('should work', () => {
            expect(queue).toBeTruthy()
        })
    })
    describe('Public metyhods tests', () => {
        const { QUEUE_VALUES } = MOCKED_STATE
        beforeEach(() => {
            mockQueueWith(QUEUE_VALUES)
        })

        it('should work', () => {
            expect(queue).toBeTruthy()
        })
    })
})
