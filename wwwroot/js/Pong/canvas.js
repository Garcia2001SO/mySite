import { rectIn, circIn } from "./drawing.js";
export { canvas, ctx, rects, circs }

const div = document.createElement('div')
div.id = 'canvasContainer'
const canvas = document.createElement('canvas')
canvas.id = 'gameCanvas'
canvas.width = '700'
canvas.height = '500'
const ctx = canvas.getContext('2d')
div.appendChild(canvas)
document.body.appendChild(div)

const rects = rectIn(ctx)
const circs = circIn(ctx)