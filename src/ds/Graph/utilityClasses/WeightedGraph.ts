/* eslint no-console: 0 */

import Graph from './Graph'
import { ILinkedListNode } from '../../LinkedList/linkedListNode'
import { TVertexValue } from './Vertex'

class WeightedGraph extends Graph {
    public display = (): void => {
        this.adjList.forEach((list, vertex) => {
            let currentEgdeList: ILinkedListNode = list.head.next

            while (currentEgdeList) {
                const { source, destination, weight } = currentEgdeList.val
                const adjacentVertex: TVertexValue =
                    vertex === source.val ? destination.val : source.val
                console.log(`Vertex ${vertex} is adjacent to: ${adjacentVertex}, weight: ${weight}`)
                currentEgdeList = currentEgdeList.next
            }
        })
    }
}

export default WeightedGraph
