import Vertex, { TVertexValue, IVertex } from './Vertex'

class Edge {
    public source: IVertex

    public destination: IVertex

    public weight: number

    constructor(source: TVertexValue, destination: TVertexValue, weight: number) {
        this.source = new Vertex(source)
        this.destination = new Vertex(destination)
        this.weight = weight
    }
}

export default Edge
