/*
 * Graph class
 * Graph is implemented using Adjacency List for storing representation
 * Adjacency List implemented as Linked List
 */

import LinkedList, { ILinkedList } from '../LinkedList/LinkedList'

interface IGraph {
    addVertex: () => void
    addEdge: () => void
}
type TAdjacencyList = ILinkedList

abstract class Graph implements IGraph {
    public adjList: Map<number, TAdjacencyList> = new Map()

    public nuberOfVertices: number = 0

    constructor(existingList?: Map<number, TAdjacencyList>) {
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

    public addEdge = (): void => {
        throw Error('Method is not implemented!')
    }

    public getVertex = (vartexValue: number): ILinkedList | undefined => {
        return this.adjList.get(vartexValue)
    }

    public getEdge = (): {} => {
        throw Error('Method is not implemented!')
    }

    public display = (): void => {}
}

export default Graph
// Q#nk3SIjPnCn
