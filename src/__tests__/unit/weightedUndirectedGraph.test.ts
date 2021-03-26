import WeightedUndirectedGraph from '../../ds/Graph/WeightedUndirectedGraph'
import Vertex, { TVertexValue, IVertex } from '../../ds/Graph/utilityClasses/Vertex'
import LinkedList, { ILinkedList } from '../../ds/LinkedList/linkedList'
import Edge from '../../ds/Graph/utilityClasses/Edge'

const MOCKED_STATE = {
    ADD_EDGE_ERROR_MESSAGE: `Cannot add edge - one of vertices (source or destination) doesn't exist!`,
    MOCKED_VERTICES: {
        v1: 1,
        v2: 2,
    },
    MOCKED_EDGES: {
        E1: [1, 2, 2],
    },
}

describe('WeightedUndirectedGraph unit tests', () => {
    let weightedUndirectedGraph: WeightedUndirectedGraph
    let testAdjacencyList: Map<TVertexValue, ILinkedList>
    const { ADD_EDGE_ERROR_MESSAGE, MOCKED_EDGES, MOCKED_VERTICES } = MOCKED_STATE

    beforeEach(() => {
        weightedUndirectedGraph = new WeightedUndirectedGraph()
        testAdjacencyList = new Map<TVertexValue, ILinkedList>()
    })

    it('should add new Edge (.addEdge test)', () => {
        const [src, dest, weight] = MOCKED_EDGES.E1
        const { v1, v2 } = MOCKED_VERTICES
        const v1Instance: IVertex = new Vertex(v1)
        const v2Instance: IVertex = new Vertex(v2)

        // setup testAdjacencyList (fill with expected output)
        testAdjacencyList.set(v1Instance.val, new LinkedList([v1Instance]))
        testAdjacencyList.set(v2Instance.val, new LinkedList([v2Instance]))

        const newEdge: Edge = new Edge(src, dest, weight)

        testAdjacencyList.get(v1)?.add(newEdge)
        testAdjacencyList.get(v2)?.add(newEdge)

        // setup graph
        weightedUndirectedGraph.addVertex(v1)
        weightedUndirectedGraph.addVertex(v2)
        weightedUndirectedGraph.addEdge(v1, v2, weight)

        // compare outputs
        expect(weightedUndirectedGraph.getRepresentation()).toEqual(testAdjacencyList)
    })

    it('should return error if new Egde has no corresponding Vertex', () => {
        const { v1, v2 } = MOCKED_VERTICES
        const weight = MOCKED_EDGES.E1[2]

        weightedUndirectedGraph.addVertex(v1)

        expect(() => weightedUndirectedGraph.addEdge(v1, v2, weight)).toThrow(
            ADD_EDGE_ERROR_MESSAGE
        )
    })
})
