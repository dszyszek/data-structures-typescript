import Graph from './utilityClasses/Graph'

class DirectedGraph extends Graph {
    public addEdge = (v1: number, v2: number): void => {
        if (!this.adjList.get(v1)) {
            throw Error(`Cannot add egde - vertex doesn't exist!`)
        }
        this.adjList.get(v1)?.add(v2)
    }
}

export default DirectedGraph
