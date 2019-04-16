import { canvas, rects } from "./canvas.js"
import { paddle1, paddle2, scores } from './players.js'
import { ball } from './ball.js'

const frameRate = 60

setInterval(() => {
   rects(0, 0, canvas.width, canvas.height, 'black')
   paddle1.draw()
   paddle2.draw()
   ball.draw()
   scores.draw()
   paddle1.move()
   paddle2.move()
   ball.move()
}, 1000/frameRate)

//EVENT BASED FUNCTIONS