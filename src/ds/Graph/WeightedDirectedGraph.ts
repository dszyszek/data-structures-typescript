import WeightedGraph from './utilityClasses/WeightedGraph'
import Edge from './utilityClasses/Edge'

class WeightedDirectedGraph extends WeightedGraph {
    public addEdge = (source: number, destination: number, weight: number) => {
        if (!this.adjList.get(source)) {
            throw Error(`Cannot add edge - source vertex doesn't exist!`)
        }

        const edge = new Edge(source, destination, weight)
        this.adjList.get(source)?.add(edge)
    }
}

export default WeightedDirectedGraph
