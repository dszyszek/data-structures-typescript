import WeightedGraph from './utilityClasses/WeightedGraph'
import Edge from './utilityClasses/Edge'
import { TVertexValue } from './utilityClasses/Vertex'

class WeightedDirectedGraph extends WeightedGraph {
    public addEdge = (source: TVertexValue, destination: TVertexValue, weight: number) => {
        if (!this.adjList.get(source)) {
            throw Error(`Cannot add edge - source vertex doesn't exist!`)
        }

        const edge = new Edge(source, destination, weight)
        this.adjList.get(source)?.add(edge)
    }
}

export default WeightedDirectedGraph
