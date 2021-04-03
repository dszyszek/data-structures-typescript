/* eslint no-console: 0 */

/*
 * Graph class
 * Graph is implemented using Adjacency List for storing representation
 * Adjacency List implemented as Linked List
 */

import LinkedList, { ILinkedList } from '../../LinkedList/linkedList'
import { ILinkedListNode } from '../../LinkedList/linkedListNode'
import GraphAbstract from './GraphAbstract'
import Vertex, { TVertexValue, IVertex } from './Vertex'

export type TAdjacencyList = Map<TVertexValue, ILinkedList>

class Graph extends GraphAbstract {
    public adjList: TAdjacencyList = new Map()

    public nuberOfVertices: number = 0

    constructor(existingList?: TAdjacencyList) {
        super()
        if (existingList) {
            this.adjList = existingList
            this.nuberOfVertices = this.countNumberOfVerticies(existingList)
        }
    }

    // PRIVATE METHODS

    private countNumberOfVerticies = (adjacencyList: TAdjacencyList): number => {
        return adjacencyList.size
    }

    private changeNumberOfVertices = (newValue: number): number => {
        this.nuberOfVertices = newValue
        return this.nuberOfVertices
    }

    // PUBLIC METHODS

    public addVertex = (vertexID: TVertexValue = this.nuberOfVertices + 1): void => {
        const newVertex: IVertex = new Vertex(vertexID)
        const adjacentValues: ILinkedList = new LinkedList([newVertex])

        this.adjList.set(newVertex.val, adjacentValues)
        this.changeNumberOfVertices(this.adjList.size)
    }

    public getVertex = (vertexID: TVertexValue): ILinkedList | undefined => {
        return this.adjList.get(vertexID)
    }

    public display = () => {
        this.adjList.forEach((list, vertex) => {
            let currentList: ILinkedListNode = list.head.next
            let adjacentVertices: string = ''

            while (currentList) {
                adjacentVertices += `${currentList.val.val}, `
                currentList = currentList.next
            }

            console.log(`Vertex ${vertex} is adjacent to: ${adjacentVertices}`)
        })
    }

    public getRepresentation = (): TAdjacencyList => {
        return this.adjList
    }
}

export default Graph
