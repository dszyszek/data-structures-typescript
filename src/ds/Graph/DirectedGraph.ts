import Graph from './utilityClasses/Graph'
import Vertex, { TVertexValue, IVertex } from './utilityClasses/Vertex'

class DirectedGraph extends Graph {
    public addEdge = (v1: TVertexValue, v2: TVertexValue, bidirectional: boolean = false): void => {
        if (!this.adjList.get(v1) || !this.adjList.get(v2)) {
            throw Error(`Cannot add egde - one of vertices doesn't exist!`)
        }

        const newVertexV2: IVertex = new Vertex(v2)
        this.adjList.get(v1)?.add(newVertexV2)

        if (bidirectional) {
            const newVertexV1: IVertex = new Vertex(v1)
            this.adjList.get(v2)?.add(newVertexV1)
        }
    }
}

export default DirectedGraph
