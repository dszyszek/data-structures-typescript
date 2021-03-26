import WeightedGraph from './utilityClasses/WeightedGraph'
import Edge from './utilityClasses/Edge'
import { TVertexValue } from './utilityClasses/Vertex'

class WeightedDirectedGraph extends WeightedGraph {
    public addEdge = (
        source: TVertexValue,
        destination: TVertexValue,
        weight: number,
        bidirectional: boolean = false
    ) => {
        if (!this.adjList.get(source) || !this.adjList.get(destination)) {
            throw Error(`Cannot add egde - one of vertices doesn't exist!`)
        }

        const edge = new Edge(source, destination, weight)
        this.adjList.get(source)?.add(edge)

        if (bidirectional) {
            this.adjList.get(destination)?.add(edge)
        }
    }
}

export default WeightedDirectedGraph
