import { canvas, circs } from './canvas.js'
import { paddle1, paddle2, scores } from "./players.js"

export const ball = {
   x: canvas.width/2,
   y: canvas.height/2,
   radius: 10,
   speedX: -10,
   speedY: 10,
   draw(){ circs(this.x, this.y, 10) },
   move(){ moveball(this, canvas, scores) },
   reset(){
      this.x = canvas.width/2
      this.y = canvas.height/2
      this.speedX = -this.speedX
      this.speedY = -this.speedY
   }
}

function moveball(ball, canvas, scores){
   ball.x += ball.speedX
   ball.y += ball.speedY

   if(ball.x > canvas.width){ 
      ball.reset()
      scores.p1score()
   }
   if(ball.x < 0){ 
      ball.reset()
      scores.p2score()
   }

	//if ball goes out of vertical limits it bounces
   if(ball.y > (canvas.height - ball.radius) || 
   ball.y < ball.radius){
      ball.speedY = -ball.speedY
   }

   //bouncing on paddle 1
   if(ball.x < (paddle1.width + paddle1.x + ball.radius)){
      if(ball.y > (paddle1.y - ball.radius) && ball.y < (paddle1.y + paddle1.height + ball.radius)){
         ball.speedX = -ball.speedX
         //the ball will go faster if it hits away 
         //from the center of the paddle
         const deltaY = ball.y - (paddle1.y + paddle1.height/2)
         ball.speedY = deltaY*0.35
      }
   }
   
   //bouncing on paddle 2
   if(ball.x > (paddle2.x - ball.radius)){
      if(ball.y > (paddle2.y - ball.radius) && ball.y < (paddle2.y + paddle2.height + ball.radius)){
         ball.speedX = -ball.speedX
         //the ball will go faster if it hits away 
         //from the center of the paddle
         const deltaY = ball.y - (paddle2.y + paddle2.height/2)
         ball.speedY = deltaY*0.3
      }
   }
}