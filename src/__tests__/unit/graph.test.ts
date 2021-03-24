import Graph, { TAdjacencyList } from '../../ds/Graph/utilityClasses/Graph'
import Vertex, { IVertex, TVertexValue } from '../../ds/Graph/utilityClasses/Vertex'
import LinkedList, { ILinkedList } from '../../ds/LinkedList/LinkedList'

const MOCKED_STATE = {
    ARRAY_OF_NEW_VERTICES: [1, 2, 3, 4, 5, 6],
}

describe('Graph unit tests', () => {
    let graph: Graph

    beforeEach(() => {
        graph = new Graph()
    })

    describe('Graph creation tests', () => {
        it('should create Graph', () => {
            expect(graph).toBeTruthy()
        })
    })

    describe('Public methods tests', () => {
        const { ARRAY_OF_NEW_VERTICES } = MOCKED_STATE

        it('should add Vertex (vertex name type: number)', () => {
            const newVertexName: TVertexValue = 1
            const newVertex: IVertex = new Vertex(newVertexName)
            const expectedAdjacencyListValue: ILinkedList = new LinkedList([newVertex])

            graph.addVertex(newVertexName)

            expect(graph.getVertex(newVertexName)).toEqual(expectedAdjacencyListValue)
        })

        it('should add Vertex (vertex name type: string)', () => {
            const newVertexName: TVertexValue = 'A'
            const newVertex: IVertex = new Vertex(newVertexName)
            const expectedAdjacencyListValue: ILinkedList = new LinkedList([newVertex])

            graph.addVertex(newVertexName)

            expect(graph.getVertex(newVertexName)).toEqual(expectedAdjacencyListValue)
        })

        it('should return Vertex (.getVertex test)', () => {
            ARRAY_OF_NEW_VERTICES.forEach((val) => {
                graph.addVertex(val)
            })

            const randomArrayOfNewVerticesIndex: number = Math.floor(
                Math.random() * ARRAY_OF_NEW_VERTICES.length
            )
            const randomArrayOfNewVerticesElement: number =
                ARRAY_OF_NEW_VERTICES[randomArrayOfNewVerticesIndex]

            const testVertex: IVertex = new Vertex(randomArrayOfNewVerticesElement)
            const expectedAdjacencyListValue: ILinkedList = new LinkedList([testVertex])

            expect(graph.getVertex(randomArrayOfNewVerticesElement)).toEqual(
                expectedAdjacencyListValue
            )
        })

        it('should return valid Adjacency List (constructor + .getRepresentation test)', () => {
            const newAdjList: TAdjacencyList = new Map()
            ARRAY_OF_NEW_VERTICES.forEach((val) => {
                const newVertex: IVertex = new Vertex(val)
                const newLinkedList: ILinkedList = new LinkedList([newVertex])
                newAdjList.set(val, newLinkedList)
            })

            const newGraph: Graph = new Graph(newAdjList)
            expect(newGraph.getRepresentation()).toEqual(newAdjList)
        })
    })
})
