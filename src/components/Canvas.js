import React, { useEffect, useRef } from 'react'

const bias = 50

const Canvas = ({ activePoints, rectangles }) => {
    const ref = useRef(null)

    useEffect(() => {
        const ctx = ref.current.getContext('2d')
        ctx.clearRect(0, 0, 500, 500)
        for (let [x, y] of activePoints) {
            ctx.beginPath()
            ctx.arc(bias + x * bias, bias + y * bias, 10, 0, 2 * Math.PI)
            ctx.fill()
        }
        for (let point of rectangles) {
            ctx.beginPath()
            ctx.moveTo(bias + point[0].x * bias, bias + point[0].y * bias)
            ctx.lineTo(bias + point[1].x * bias, bias + point[1].y * bias)
            ctx.lineTo(bias + point[2].x * bias, bias + point[2].y * bias)
            ctx.lineTo(bias + point[3].x * bias, bias + point[3].y * bias)
            ctx.closePath()
            ctx.strokeStyle = getRandomColor()
            ctx.stroke()
        }
    }, [activePoints, rectangles])

    return <canvas ref={ref} width={500} height={500} />
}

const getRandomColor = () => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    return 'rgb(' + red + ',' + green + ',' + blue + ' )'
}

export default Canvas
