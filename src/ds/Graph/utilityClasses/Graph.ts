/* eslint no-console: 0 */

/*
 * Graph class
 * Graph is implemented using Adjacency List for storing representation
 * Adjacency List implemented as Linked List
 */

import LinkedList, { ILinkedList } from '../../LinkedList/LinkedList'
import { ILinkedListNode } from '../../LinkedList/LinkedListNode'
import GraphAbstract from './GraphAbstract'

export type TAdjacencyList = ILinkedList

class Graph extends GraphAbstract {
    public adjList: Map<number, TAdjacencyList> = new Map()

    public nuberOfVertices: number = 0

    constructor(existingList?: Map<number, TAdjacencyList>) {
        super()
        if (existingList) {
            this.adjList = existingList
            this.nuberOfVertices = this.countNumberOfVerticies(existingList)
        }
    }

    // PRIVATE METHODS

    private countNumberOfVerticies = (adjacencyList: Map<number, TAdjacencyList>): number => {
        return adjacencyList.size
    }

    private changeNumberOfVertices = (newValue: number): number => {
        this.nuberOfVertices = newValue
        return this.nuberOfVertices
    }

    // PUBLIC METHODS

    public addVertex = (): void => {
        const newVertexNumber = this.nuberOfVertices + 1
        const adjacentValues: ILinkedList = new LinkedList([newVertexNumber])

        this.adjList.set(newVertexNumber, adjacentValues)
        this.changeNumberOfVertices(this.adjList.size)
    }

    public getVertex = (vartexValue: number): ILinkedList | undefined => {
        return this.adjList.get(vartexValue)
    }

    public display = () => {
        this.adjList.forEach((list, vertex) => {
            let currentList: ILinkedListNode = list.head
            let adjacentVertices: string = ''

            while (currentList.next) {
                adjacentVertices += `${currentList.val}, `
                currentList = currentList.next
            }

            console.log(`Vertex ${vertex} is adjacent to: ${adjacentVertices}`)
        })
    }

    public getRepresentation = (): Map<number, ILinkedList> => {
        return this.adjList
    }
}

export default Graph
// Q#nk3SIjPnCn
