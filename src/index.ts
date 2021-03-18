import LinkedList, {ILinkedList} from './ds/LinkedList/linkedList';

((): void => {
    const newLinkedList: ILinkedList = new LinkedList([1,2,3,4,5, {a: 1}, 7]);
    // console.log(newLinkedList.lastNode, 'newLinkedList lastNode');
    console.log(newLinkedList.getNodeAt(6), 'newLinkedList.getNodeAt');
    // console.log(newLinkedList.firstNode, 'newLinkedList firstNode');
    // console.log(newLinkedList.length, 'newLinkedList.length');
    
    // newLinkedList.pop();
    // console.log(newLinkedList.lastNode, 'newLinkedList lastNode');

    // newLinkedList.shift();
    // console.log(newLinkedList.firstNode, 'newLinkedList firstNode');

    newLinkedList.unshift({c: 2});
    console.log(newLinkedList.head, 'newLinkedList head');
    console.log(newLinkedList.length, 'newLinkedList.length');

})();

export {
    LinkedList
}