import { canvas, ctx, rects } from './canvas.js'
import { ball } from './ball.js'
import { keyDownIn } from '../inputs/keydown.js'
import { getMousePosIn } from "../inputs/mousePositoin.js";

const paddleHeight = 100;
const paddleWidth = 10;
export let pause = true;

const keyDo = keyDownIn(document)
const mousePos = getMousePosIn(canvas)

export const paddle1 = {
   y: 200,
   x: 5,
   width: paddleWidth,
   height: paddleHeight,
   draw(){ rects(this.x, this.y, this.width, this.height) },
   move(){ this.y = mousePos.y - this.height/2 + 5}
   // move(){ 
   //    keyDo(this.controls.up, ()=>{ this.y -= 8 })
   //    keyDo(this.controls.down, ()=>{ this.y += 8 })
   // }
}

export const paddle2 = {
   y: 200,
   x: canvas.width - 15,
   width: paddleWidth,
   height: paddleHeight,
   up: false,
   down: false,
   left: false,
   right: false,
   controls:{ up: 38, down: 40 },
   draw(){ rects(this.x, this.y, this.width, this.height) },
   move(){ paddleAI(this, ball) }
}

export const scores = {
   p1: 0,
   p2: 0,
   p1score(){ this.p1++ },
   p2score(){ this.p2++ },
   draw(){
      ctx.fillStyle = 'White';
      ctx.fillText(this.p1, 100, 100);
      ctx.fillText(this.p2, canvas.width - 110, 100);
   }
}

function paddleAI(paddle, ball){
   //paddle2
   if(ball.y > (paddle.y + paddle.height/2)){
      paddle.y += Math.abs(ball.speedY)*8/10;
   }
   
   if(ball.y < (paddle.y + paddle.height/2)){
      paddle.y -= Math.abs(ball.speedY)*8/10;
   }
}