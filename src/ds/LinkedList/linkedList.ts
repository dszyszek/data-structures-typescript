import LinkedListNode, { ILinkedListNode } from './linkedListNode';

type TLinkedListParameter = any[] | [];

interface ILinkedList {
    append: Function;
    get: Function;
    shift: Function;
    unshift: Function;
    pop: Function;
};

class LinkedList implements ILinkedList {
    private head: ILinkedListNode = new LinkedListNode();

    constructor(listStructure: TLinkedListParameter) {
        // If listStructure passed, assign its values to linked list
        if (listStructure.length) {
            this.head.val = listStructure[0];

            // Won't work -> it must be recursive
            for (let i = 1; i < listStructure.length; i++) {
                let newNode = new LinkedListNode();
                newNode.val = listStructure[i];
                newNode.next = listStructure[i + 1] || null;

                this.head.next = newNode;
            }
        }
    }

    shift() {

    }

    unshift() {

    }

    append() {

    }

    pop() {

    }

    get() {

    }
}

export default LinkedList;