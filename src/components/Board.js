import React, { useState } from 'react'
import classNames from 'classnames'
import range from 'lodash.range'

const Board = ({ onActivePointsChange, activePoints }) => {
    const [width, setWidth] = useState(10)
    const [height, setHeight] = useState(10)

    return (
        <div>
            Width:{' '}
            <input
                type={'number'}
                value={width}
                onChange={(e) => {
                    const val = Number(e.target.value)
                    setWidth(val)
                    onActivePointsChange(activePoints.filter((p) => p[0] < val))
                }}
            />{' '}
            <br />
            Height:{' '}
            <input
                type={'number'}
                value={height}
                onChange={(e) => {
                    const val = Number(e.target.value)
                    setHeight(val)
                    onActivePointsChange(activePoints.filter((p) => p[1] < val))
                }}
            />{' '}
            <br />
            <table>
                <tbody>
                    {range(height).map((iV, i) => (
                        <tr key={i}>
                            {range(width).map((jV, j) => {
                                const isActive = activePoints.some(
                                    (p) => p[0] === j && p[1] === i
                                )
                                return (
                                    <td
                                        key={j}
                                        className={classNames('cell', {
                                            active: isActive,
                                        })}
                                        onClick={() =>
                                            onActivePointsChange(
                                                isActive
                                                    ? activePoints.filter(
                                                          (p) =>
                                                              !(
                                                                  p[0] === j &&
                                                                  p[1] === i
                                                              )
                                                      )
                                                    : [...activePoints, [j, i]]
                                            )
                                        }
                                    />
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Board
