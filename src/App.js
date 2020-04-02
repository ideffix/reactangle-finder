import React, { useState } from 'react'
import Board from './components/Board'
import Canvas from './components/Canvas'
import { findRectangles } from './service/rectangleService'
import Result from './components/Result'

const App = () => {
    const [activePoints, setActivePoints] = useState([])
    const rectangles = findRectangles(activePoints)
    return (
        <>
            <div className="flex">
                <Board
                    onActivePointsChange={setActivePoints}
                    activePoints={activePoints}
                />
                <Result rectangles={rectangles} />
            </div>
            <Canvas activePoints={activePoints} rectangles={rectangles} />
        </>
    )
}

export default App
