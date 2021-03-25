import LinkedList, { ILinkedList } from '../../ds/LinkedList/linkedList'

describe('Linked List unit tests', () => {
    const MOCKED_STATE = {
        LINKED_LIST_PAYLOAD: [1, 2, 3, { a: 1 }, [4, 5, 6]],
        NEW_ELEMENT: { c: 2 },
        NEW_MANY_ELEMENTS: [7, 90, { v: [1, 2, 3] }],
    }

    describe('Linked List creation tests', () => {
        it('should create empty linked list', () => {
            const newLinkedList: ILinkedList = new LinkedList()
            const { val, next } = newLinkedList.head
            expect(val).toEqual(null)
            expect(next).toEqual(null)
            expect(newLinkedList instanceof LinkedList).toEqual(true)
        })
        it('should create linked list from array of objects', () => {
            const { LINKED_LIST_PAYLOAD } = MOCKED_STATE
            const newLinkedList = new LinkedList(LINKED_LIST_PAYLOAD)
            const { val, next } = newLinkedList

            expect(val).toEqual(LINKED_LIST_PAYLOAD[0])
            expect(next.val).toEqual(LINKED_LIST_PAYLOAD[1])

            // test if value of last node is same as last element in payload array
            expect(newLinkedList.getNodeAt(newLinkedList.length - 1).val).toEqual(
                LINKED_LIST_PAYLOAD[LINKED_LIST_PAYLOAD.length - 1]
            )
        })
    })

    describe('Getters tests', () => {
        const { LINKED_LIST_PAYLOAD } = MOCKED_STATE
        let testLinkedList: ILinkedList

        beforeEach(() => {
            testLinkedList = new LinkedList(LINKED_LIST_PAYLOAD)
        })

        it('should return head', () => {
            const compareLinkedList: LinkedList = new LinkedList(LINKED_LIST_PAYLOAD.slice(1))

            expect(testLinkedList.head.val).toEqual(LINKED_LIST_PAYLOAD[0])
            expect(testLinkedList.head.next).toEqual(compareLinkedList.head)
        })
        it('should return next value (from current head)', () => {
            const compareLinkedList: LinkedList = new LinkedList(LINKED_LIST_PAYLOAD.slice(1))

            expect(testLinkedList.next).toEqual(compareLinkedList.head)
        })
        it('should return length of linked list', () => {
            expect(testLinkedList.length).toEqual(LINKED_LIST_PAYLOAD.length)
        })
        it('should return lastNode', () => {
            const lastElementOfPayloadArray: any[] = LINKED_LIST_PAYLOAD.slice(
                LINKED_LIST_PAYLOAD.length - 1
            )
            const compareLinkedList: LinkedList = new LinkedList(lastElementOfPayloadArray)

            expect(testLinkedList.lastNode).toEqual(compareLinkedList.head)
        })
    })

    describe('Public methods tests', () => {
        const { LINKED_LIST_PAYLOAD, NEW_ELEMENT, NEW_MANY_ELEMENTS } = MOCKED_STATE
        let testLinkedList: ILinkedList

        beforeEach(() => {
            testLinkedList = new LinkedList(LINKED_LIST_PAYLOAD)
        })

        it('should return node at index (.getNodeAt test)', () => {
            const payloadIndex: number = LINKED_LIST_PAYLOAD.length - 3
            const payloadArray: any[] = LINKED_LIST_PAYLOAD.slice(payloadIndex)
            const compareLinkedList: LinkedList = new LinkedList(payloadArray)

            expect(testLinkedList.getNodeAt(payloadIndex)).toEqual(compareLinkedList.head)
        })
        it('should remove first node (.shift test)', () => {
            const payloadArray: any[] = LINKED_LIST_PAYLOAD.slice(1)
            const compareLinkedList: LinkedList = new LinkedList(payloadArray)

            expect(testLinkedList.shift()).toEqual(compareLinkedList.head)
        })
        it('should add element (type any) at the beginning (.unshift test)', () => {
            expect(testLinkedList.unshift(NEW_ELEMENT).val).toEqual(NEW_ELEMENT)
        })
        it('should remove last node (.pop test)', () => {
            const payloadArray: any[] = LINKED_LIST_PAYLOAD.slice(0, LINKED_LIST_PAYLOAD.length - 1)
            const compareLinkedList: LinkedList = new LinkedList(payloadArray)
            expect(testLinkedList.pop()).toEqual(compareLinkedList.head)
        })
        it('should convert and add one element at the end (.add test)', () => {
            const payloadArray: any[] = [...LINKED_LIST_PAYLOAD, NEW_ELEMENT]
            const compareLinkedList: LinkedList = new LinkedList(payloadArray)

            expect(testLinkedList.add(NEW_ELEMENT)).toEqual(compareLinkedList.head)
        })
        it('should convert and add many elements at the end (.addMany test)', () => {
            const payloadArray: any[] = [...LINKED_LIST_PAYLOAD, ...NEW_MANY_ELEMENTS]
            const compareLinkedList: LinkedList = new LinkedList(payloadArray)

            expect(testLinkedList.addMany(NEW_MANY_ELEMENTS)).toEqual(compareLinkedList.head)
        })
        it('should insert given element (type any) at the given index (.insert test)', () => {
            const payloadArray: any[] = [...LINKED_LIST_PAYLOAD]
            payloadArray.splice(3, 0, NEW_ELEMENT)

            const compareLinkedList: LinkedList = new LinkedList(payloadArray)

            expect(testLinkedList.insert(3, NEW_ELEMENT)).toEqual(compareLinkedList.head)
        })
    })
})
