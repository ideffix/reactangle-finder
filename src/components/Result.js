import React from 'react'

// TODO highlight fun
const Result = ({ rectangles }) => (
    <div>
        <h1>Number of rectangles: {rectangles.length}</h1>
        {rectangles.map((r, i) => (
            <div>
                {i + 1}: [{r.map((p) => JSON.stringify(p))}]
            </div>
        ))}
    </div>
)

export default Result
