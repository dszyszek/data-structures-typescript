import LinkedList, {ILinkedList} from './ds/LinkedList/linkedList';

((): void => {
    const newLinkedList: ILinkedList = new LinkedList([1,2,3,4,5, {a: 1}, 7]);
    console.log(newLinkedList.next, 'newLinkedList');
})();

export {
    LinkedList
}