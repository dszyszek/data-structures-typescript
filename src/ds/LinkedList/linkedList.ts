import LinkedListNode, { ILinkedListNode } from './linkedListNode';

type TLinkedListParameter = any[] | [];

export interface ILinkedList {
    getNodeAt: (indexOfNode: number, head?: ILinkedListNode) => ILinkedListNode;
    shift: () => ILinkedListNode;
    unshift: (element: any) => ILinkedListNode;
    pop: () => ILinkedListNode;
    add: (element: any) => ILinkedListNode;
    addMany: (arrayOfElements: any[]) => ILinkedListNode;
    insert: (index: number, element: any) => ILinkedListNode;
    readonly val: any;
    readonly next: ILinkedListNode | null;
    readonly length: number;
    readonly lastNode: ILinkedListNode | null;
    readonly head: ILinkedListNode;
};

class LinkedList implements ILinkedList {
    private listHead: ILinkedListNode = new LinkedListNode();
    private linkedListLength: number = 0;

    constructor(listStructure: TLinkedListParameter = []) {

        // If listStructure passed, assign its values to linked list
        if (listStructure.length) {
            this.addMany(listStructure);
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
    public get lastNode(): ILinkedListNode {
        return this.getNodeAt(this.linkedListLength-1);
    }
    public get head(): ILinkedListNode {
        return this.getNodeAt(0);
    }

    // PRIVATE METHODS

    private changeLinkedListLength(newLength: number): void {
        this.linkedListLength = newLength;
    }

    private placeNodeAt(node: ILinkedListNode, index: number): ILinkedListNode {
        // places node at given index and returns new head
        const parentNodeAtIndex: ILinkedListNode = this.getNodeAt(index-1);
        const currentNodeAtIndex: ILinkedListNode = this.getNodeAt(index);
        // console.log(this.listHead, 'this.listHead');
        

        node.next = this.listHead.val === null ? null : currentNodeAtIndex;
        if (parentNodeAtIndex === currentNodeAtIndex) {
            // this conditions covers case, when index = 0 (and so parentNodeAtIndex === currentNodeAtIndex)
            this.listHead = node;
        } else {
            parentNodeAtIndex.next = node;
        }

        return this.listHead;
    }

    // PUBLIC METHODS

    public getNodeAt(indexOfNode: number, head: ILinkedListNode = this.listHead): ILinkedListNode {
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

        const parentToLastNode: ILinkedListNode = this.getNodeAt(this.linkedListLength - 2, this.listHead);
        parentToLastNode.next = null;
        this.changeLinkedListLength(this.linkedListLength - 1);

        return this.listHead;
    }

    public shift(): ILinkedListNode {
        // removes first node and returns new head

        const firstNodeChild: ILinkedListNode = this.listHead.next;
        this.listHead = firstNodeChild;
        this.changeLinkedListLength(this.linkedListLength - 1);

        return this.listHead;
    }

    public unshift(element: any): ILinkedListNode {
        // add new node at the beggining and returns new head
        
        this.insert(0, element);
        return this.listHead;
    }

    public add(element: any): ILinkedListNode {
        // add new node at the end and returns new head

        this.insert(this.linkedListLength, element);
        return this.listHead;
    }

    public addMany(arrayOfElements: any[]): ILinkedListNode {
        // adds many elements at the end of linked list and returns new head

        if (!arrayOfElements.length) {
            return this.listHead;
        }

        this.insert(this.linkedListLength, arrayOfElements[0]);
        return this.addMany(arrayOfElements.slice(1));
    }

    public insert(index: number, element: any): ILinkedListNode {
        const newNode = new LinkedListNode(element);
        this.placeNodeAt(newNode, index);
        this.changeLinkedListLength(this.linkedListLength + 1);

        return this.listHead;
    }
}

export default LinkedList;