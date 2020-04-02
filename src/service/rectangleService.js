export const findRectangles = (points) => {
    let arr = []
    for (let [x1, y1] of points) {
        for (let [x2, y2] of points) {
            if (y2 > y1 && x1 === x2) {
                let i = arr.findIndex((o) => o.y1 === y1 && o.y2 === y2)
                if (i >= 0) {
                    arr[i] = {
                        ...arr[i],
                        rectangles: [
                            ...arr[i].rectangles,
                            ...arr[i].rectangles.map(
                                rectangleMapper(arr[i], x1)
                            ),
                            [
                                { x: x1, y: y1 },
                                { x: x1, y: y2 },
                                { x: arr[i].x, y: y2 },
                                { x: arr[i].x, y: y1 },
                            ],
                        ],
                    }
                } else {
                    arr = [...arr, { y2, y1, x: x1, rectangles: [] }]
                }
            }
        }
    }
    return arr.flatMap((o) => o.rectangles)
}

const rectangleMapper = (point, x) => (r) =>
    r.map((p) => (p.x === point.x ? p : { ...p, x }))
