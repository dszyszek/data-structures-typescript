export type TVertexValue = number | string
export interface IVertex {
    val: TVertexValue
}

class Vertex implements IVertex {
    public val: TVertexValue

    constructor(val: TVertexValue) {
        this.val = val
    }
}

export default Vertex
