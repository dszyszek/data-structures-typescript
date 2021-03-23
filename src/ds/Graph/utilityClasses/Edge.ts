class Edge {
    public source: number

    public destination: number

    public weight: number

    constructor(source: number, destination: number, weight: number) {
        this.source = source
        this.destination = destination
        this.weight = weight
    }
}

export default Edge
