import WeightedGraph from './utilityClasses/WeightedGraph'
import Edge from './utilityClasses/Edge'

class WeightedUndirectedGraph extends WeightedGraph {
    public addEdge = (source: number, destination: number, weight: number) => {
        if (!this.adjList.get(source) || !this.adjList.get(destination)) {
            throw Error(`Cannot add edge - one of vertices (source or destination) doesn't exist!`)
        }

        const edge = new Edge(source, destination, weight)
        this.adjList.get(source)?.add(edge)
        this.adjList.get(destination)?.add(edge)
    }
}

export default WeightedUndirectedGraph
