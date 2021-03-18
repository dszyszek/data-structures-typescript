import LinkedListNode, { ILinkedListNode } from './linkedListNode';

type TLinkedListParameter = any[] | [];

export interface ILinkedList {
    getNodeAt: (indexOfNode: number, head: ILinkedListNode) => ILinkedListNode;
    shift: () => ILinkedListNode;
    unshift: (node: ILinkedListNode) => ILinkedListNode;
    pop: () => ILinkedListNode;
    add: (arrayOfElements: any[], head: ILinkedListNode) => ILinkedListNode;
    readonly val: any;
    readonly next: ILinkedListNode | null;
    readonly length: number;
};

class LinkedList implements ILinkedList {
    private listHead: ILinkedListNode = new LinkedListNode();
    private linkedListLength: number = 0;

    constructor(listStructure?: TLinkedListParameter) {

        // If listStructure passed, assign its values to linked list
        if (listStructure?.length) {
            this.listHead.val = listStructure[0];
            this.add(listStructure.slice(1));
        }
    }

    // GETTERS
    public get val(): ILinkedListNode {
        return this.listHead.val;
    } 
    public get next(): ILinkedListNode {
        return this.listHead.next;
    }
    public get length(): number {
        return this.linkedListLength;
    }

    // PRIVATE METHODS

    private appendNode(newNode: ILinkedListNode): ILinkedListNode {
        // adds newNode at the end of linked list and returns head

        const lastNode: ILinkedListNode = this.getNodeAt(this.linkedListLength, this.listHead);
        lastNode.next = newNode;
        this.linkedListLength += 1;

        return this.listHead;
    }

    // PUBLIC METHODS

    public getNodeAt(indexOfNode: number, head: ILinkedListNode): ILinkedListNode {
        // get node at passed level of deepness (index)
        if (indexOfNode > this.linkedListLength) {
            throw Error(`Out of range error (getNodeAt executed with index: ${indexOfNode}, while Linked List length is: ${this.linkedListLength})`);
        } else if (indexOfNode <= 0) {
            return head;
        }

        return this.getNodeAt(indexOfNode-1, head.next);
    }

    public pop(): ILinkedListNode {
        // removes last list node and returns new head

        const parentToLastNode: ILinkedListNode = this.getNodeAt(this.linkedListLength - 1, this.listHead);
        parentToLastNode.next = null;

        return this.listHead;
    }

    public shift(): ILinkedListNode {
        // removes first node and returns new head

        const firstNodeChild: ILinkedListNode = this.listHead.next;
        this.listHead = firstNodeChild;

        return this.listHead;
    }

    public unshift(node: ILinkedListNode): ILinkedListNode {
        // takes node to place as head and returns new head

        const prevHead = this.listHead;
        node.next = prevHead;

        this.listHead = node;
        return this.listHead;

    }

    public add(arrayOfElements: any[]): ILinkedListNode {
        // adds element (array of elements) at the end of linked list and returns new head

        for (let i = 0; i < arrayOfElements.length; i++) {
            let newNode = new LinkedListNode();
            newNode.val = arrayOfElements[i];
            newNode.next = arrayOfElements[i + 1] ? new LinkedListNode(arrayOfElements[i + 1]) : null;
            this.appendNode(newNode);
        }

        return this.listHead;
    }
}

export default LinkedList;