import Stack from '../../ds/Stack/Stack'
import StackNode, { IStackNode } from '../../ds/Stack/StackNode'

const MOCKED_STATE = {
    STACK_VALUES: [1, 2, 3, 4, 5],
    NEW_STACK_VAL: 100,
}

describe('Stack unit tests', () => {
    let stack: Stack

    const mockStackWith = (val: any[] | undefined = undefined): void => {
        stack = val ? new Stack(val) : new Stack()
    }

    afterEach(() => {
        stack = new Stack()
    })

    describe('Getters tests', () => {
        const { STACK_VALUES } = MOCKED_STATE

        beforeEach(() => {
            mockStackWith(STACK_VALUES)
        })

        it('should return current peak (.peak test)', () => {
            const peak: IStackNode = new StackNode(STACK_VALUES[0])
            expect(stack.peak).toEqual(peak)
        })
        it('should return info if stack is empty (.isEmpty test )', () => {
            const expectedIsEmtyVal: boolean = false
            expect(stack.isEmpty).toEqual(expectedIsEmtyVal)
        })
    })

    describe('Public methods tests', () => {
        const { STACK_VALUES, NEW_STACK_VAL } = MOCKED_STATE

        beforeEach(() => {
            mockStackWith(STACK_VALUES)
        })

        it('should push new value into stack (.push() test)', () => {
            const expectedStackPeak: IStackNode = new StackNode(NEW_STACK_VAL)
            stack.push(NEW_STACK_VAL)

            expect(stack.peak).toEqual(expectedStackPeak)
        })
        it('should remove current top value (.pop() test )', () => {
            const currentStackPeak: IStackNode = stack.peak
            const expectedStackPeak: IStackNode = new StackNode(STACK_VALUES[1])
            stack.pop()

            expect(stack.peak).not.toEqual(currentStackPeak)
            expect(stack.peak).toEqual(expectedStackPeak)
        })
        it('should return popped value (.pop() test)', () => {
            const expectedPoppedValue: IStackNode = new StackNode(STACK_VALUES[0])
            const poppedValue: IStackNode = stack.pop()

            expect(expectedPoppedValue).toEqual(poppedValue)
        })
    })
})
