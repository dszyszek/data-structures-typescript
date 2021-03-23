/* eslint no-console: 0 */

import Graph from './Graph'
import { ILinkedListNode } from '../../LinkedList/LinkedListNode'

class WeightedGraph extends Graph {
    public display = (): void => {
        this.adjList.forEach((list) => {
            let currentEgdeList: ILinkedListNode = list.head

            while (currentEgdeList.next) {
                const { source, destination, weight } = currentEgdeList.val
                console.log(`Vertex ${source} is adjacent to: ${destination}, weight: ${weight}`)
                currentEgdeList = currentEgdeList.next
            }
        })
    }
}

export default WeightedGraph
