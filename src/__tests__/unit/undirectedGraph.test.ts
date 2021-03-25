import UndirectedGraph from '../../ds/Graph/UndirectedGraph'
import Vertex, { TVertexValue, IVertex } from '../../ds/Graph/utilityClasses/Vertex'
import LinkedList, { ILinkedList } from '../../ds/LinkedList/linkedList'

const MOCKED_STATE = {
    ADD_EDGE_ERROR_MESSAGE: `Cannot add egde - one of vertices doesn't exist!`,
}

describe('UndirectedGraph unit tests', () => {
    let undirectedGraph: UndirectedGraph
    const { ADD_EDGE_ERROR_MESSAGE } = MOCKED_STATE

    beforeEach(() => {
        undirectedGraph = new UndirectedGraph()
    })

    it('should add new Edge (.addEdge test)', () => {
        const newVertexName1: TVertexValue = 1
        const newVertexName2: TVertexValue = 2

        const testVertex1: IVertex = new Vertex(newVertexName1)
        const testVertex2: IVertex = new Vertex(newVertexName2)
        const testAdjacencyList: ILinkedList = new LinkedList([testVertex1])
        testAdjacencyList.add(testVertex2)

        undirectedGraph.addVertex(newVertexName1)
        undirectedGraph.addVertex(newVertexName2)
        undirectedGraph.addEdge(newVertexName1, newVertexName2)

        expect(undirectedGraph.getVertex(newVertexName1)).toEqual(testAdjacencyList)
    })

    it('should return error if new Egde has no corresponding Vertex', () => {
        const newVertexName1: TVertexValue = 1
        const newVertexName2: TVertexValue = 2

        undirectedGraph.addVertex(newVertexName1)

        expect(() => undirectedGraph.addEdge(newVertexName1, newVertexName2)).toThrow(
            ADD_EDGE_ERROR_MESSAGE
        )
    })
})
