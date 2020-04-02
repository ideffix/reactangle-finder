import { findRectangles } from './rectangleService'

const base = [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
]

const baseWOPoint = [
    [0, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
]

const base9 = [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
]

describe('rectangle service', () => {
    it('should return 3', () => {
        expect(findRectangles(base)).toHaveLength(3)
    })
    it('should return 1', () => {
        expect(findRectangles(baseWOPoint)).toHaveLength(1)
    })
    it('should return 9', () => {
        expect(findRectangles(base9)).toHaveLength(9)
    })
})
