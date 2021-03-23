import Graph from './utilityClasses/Graph'
import Vertex, { TVertexValue, IVertex } from './utilityClasses/Vertex'

class DirectedGraph extends Graph {
    public addEdge = (v1: TVertexValue, v2: TVertexValue): void => {
        if (!this.adjList.get(v1)) {
            throw Error(`Cannot add egde - vertex doesn't exist!`)
        }

        const newVertex: IVertex = new Vertex(v2)
        this.adjList.get(v1)?.add(newVertex)
    }
}

export default DirectedGraph
