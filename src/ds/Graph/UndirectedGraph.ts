import Graph from './utilityClasses/Graph'

class UndirectedGraph extends Graph {
    public addEdge = (v1: number, v2: number): void => {
        if (!this.adjList.get(v1) || !this.adjList.get(v2)) {
            throw Error(`Cannot add egde - one of vertices doesn't exist!`)
        }
        this.adjList.get(v1)?.add(v2)
        this.adjList.get(v2)?.add(v1)
    }
}

export default UndirectedGraph
