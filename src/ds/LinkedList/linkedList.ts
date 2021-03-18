import LinkedListNode, { ILinkedListNode } from './linkedListNode';

type TLinkedListParameter = any[] | [];

export interface ILinkedList {
    append: Function;
    get: Function;
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

    // getters
    public get val(): ILinkedListNode {
        return this.listHead.val;
    } 
    public get next(): ILinkedListNode {
        return this.listHead.next;
    }
    public get length(): number {
        return this.linkedListLength;
    }

    // private methods
    private getLastNode(head: ILinkedListNode): ILinkedListNode {
        // console.log(head, 'head in getLastNode');
        if (head.next === null) {
            return head;
        }
        return this.getLastNode(head.next);
    }

    private getNodeAt(index: number): ILinkedListNode {
        // WIP
        return this.listHead;
    }

    // public methods

    public shift() {
        // WIP

    }

    public unshift() {
        // WIP

    }

    public append(newNode: ILinkedListNode): ILinkedListNode {
        const lastNode: ILinkedListNode = this.getLastNode(this.listHead);
        lastNode.next = newNode;

        return this.listHead;
    }

    public pop() {
        // WIP
        const lastNode: ILinkedListNode = this.getLastNode(this.listHead);

    }

    public get() {
        // WIP

    }
}

export default LinkedList;