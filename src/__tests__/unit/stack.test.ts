import Stack from '../../ds/Stack/Stack'

describe('Stack unit tests', () => {
    let stack: Stack
    beforeEach(() => {
        stack = new Stack()
    })

    it('should work', () => {
        expect(stack).toBeTruthy()
    })
})
