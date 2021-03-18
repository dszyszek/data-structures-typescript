import LinkedListNode, { ILinkedListNode } from './linkedListNode';

type TLinkedListParameter = any[] | [];

export interface ILinkedList {
    append: Function;
    getNodeAt: Function;
    shift: Function;
    unshift: Function;
    pop: Function;
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
            for (let i = 1; i < listStructure.length; i += 2) {
                let newNode = new LinkedListNode();
                newNode.val = listStructure[i];
                newNode.next = listStructure[i + 1] ? new LinkedListNode(listStructure[i + 1]) : null;
                this.append(newNode);
            }
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
    private getLastNode(head: ILinkedListNode): ILinkedListNode {
        if (head.next === null) {
            return head;
        }
        return this.getLastNode(head.next);
    }

    // PUBLIC METHODS

    public getNodeAt(index: number): ILinkedListNode {
        // get node at passed level of deepness (index)

        let counter: number = 0;
        let node: ILinkedListNode = this.listHead;

        if (index > this.linkedListLength) {
            throw Error(`Out of range error (getNodeAt executed with index: ${index}, while Linked List length is: ${this.linkedListLength})`);
        }

        while(counter <= index) {
            node = node.next;
            counter++;
        }

        return node;
    }

    public append(newNode: ILinkedListNode): ILinkedListNode {
        // adds newNode at the end of linked list and returns head

        const lastNode: ILinkedListNode = this.getLastNode(this.listHead);
        lastNode.next = newNode;

        return this.listHead;
    }

    public pop(): ILinkedListNode {
        // removes last list node and returns it 

        const parentToLastNode: ILinkedListNode = this.getNodeAt(this.linkedListLength - 1);
        const lastNode = parentToLastNode.next;
        parentToLastNode.next = null;

        return lastNode;
    }

    public shift(): ILinkedListNode {
        // removes first node and returns it

        const firstNode = this.listHead;
        const firstNodeChild: ILinkedListNode = this.listHead.next;
        this.listHead = firstNodeChild;

        return firstNode;
    }

    public unshift(node: ILinkedListNode): ILinkedListNode {
        // takes node to place as head and returnsit

        const prevHead = this.listHead;
        node.next = prevHead;

        this.listHead = node;
        return this.listHead;

    }
}

export default LinkedList;