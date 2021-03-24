/* eslint @typescript-eslint/no-unused-vars: 0 */

/*
 * GraphAbstract abstract class
 */

import { ILinkedList } from '../../LinkedList/LinkedList'
import { IVertex, TVertexValue } from './Vertex'

abstract class GraphAbstract {
    public addVertex = (vertexID: TVertexValue): void => {
        throw Error('Method not implemented')
    }

    public addEdge = (...[args]: number[]): void => {
        throw Error('Method is not implemented!')
    }

    public getVertex = (vertex: TVertexValue): ILinkedList | undefined => {
        throw Error('Method is not implemented!')
    }

    public display = (): void => {
        throw Error('Method is not implemented!')
    }

    public removeVertex = (vertex: number): void => {
        throw Error('Method not implemented')
    }

    public removeEdge = (): void => {
        throw Error('Method is not implemented!')
    }

    public getRepresentation = (): Map<any, any> => {
        throw Error('Method is not implemented!')
    }
}

export default GraphAbstract
