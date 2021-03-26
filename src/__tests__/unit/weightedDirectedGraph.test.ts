import WeightedDirectedGraph from '../../ds/Graph/WeightedDirectedGraph'
import Vertex, { TVertexValue, IVertex } from '../../ds/Graph/utilityClasses/Vertex'
import LinkedList, { ILinkedList } from '../../ds/LinkedList/linkedList'
import Edge from '../../ds/Graph/utilityClasses/Edge'

const MOCKED_STATE = {
    ADD_EDGE_ERROR_MESSAGE: `Cannot add egde - one of vertices doesn't exist!`,
    MOCKED_VERTICES: {
        v1: 1,
        v2: 2,
    },
    MOCKED_EDGES: {
        E1: [1, 2, 2],
    },
}

describe('WeightedDirectedGraph unit tests', () => {
    let weightedDirectedGraph: WeightedDirectedGraph
    let testAdjacencyList: Map<TVertexValue, ILinkedList>
    const { ADD_EDGE_ERROR_MESSAGE, MOCKED_EDGES, MOCKED_VERTICES } = MOCKED_STATE

    beforeEach(() => {
        weightedDirectedGraph = new WeightedDirectedGraph()
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

        // setup graph
        weightedDirectedGraph.addVertex(v1)
        weightedDirectedGraph.addVertex(v2)
        weightedDirectedGraph.addEdge(v1, v2, weight)

        // compare outputs
        expect(weightedDirectedGraph.getRepresentation()).toEqual(testAdjacencyList)
    })

    it('should return error if new Egde has no corresponding Vertex', () => {
        const { v1, v2 } = MOCKED_VERTICES
        const weight = MOCKED_EDGES.E1[2]

        weightedDirectedGraph.addVertex(v1)

        expect(() => weightedDirectedGraph.addEdge(v1, v2, weight)).toThrow(ADD_EDGE_ERROR_MESSAGE)
    })
})
