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

    private getLastNode(head: ILinkedListNode): ILinkedListNode {
        if (head.next === null) {
            return head;
        }
        return this.getLastNode(head.next);
    }

    private getNodeAt(index: number): ILinkedListNode {
        // WIP
        return this.head;
    }

    private get linkedListLength(): number {
        // WIP

        return 0;
    }

    public shift() {
        // WIP

    }

    public unshift() {
        // WIP

    }

    public append(newNode: ILinkedListNode): ILinkedListNode {
        const lastNode: ILinkedListNode = this.getLastNode(this.head);
        lastNode.next = newNode;

        return this.head;
    }

    public pop() {
        // WIP
        const lastNode: ILinkedListNode = this.getLastNode(this.head);

    }

    public get() {
        // WIP

    }
}

export default LinkedList;