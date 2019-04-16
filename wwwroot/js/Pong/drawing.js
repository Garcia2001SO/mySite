export {rectIn, circIn}

//draws rectangles in the given context
function rectIn(ctx){
   return (leftX, topY, width, height, color='white')=>{
      ctx.fillStyle = color
      ctx.fillRect(leftX, topY, width, height)
   }
}

//draws balls in the given context
function circIn(ctx) {
   return (centerX, centerY, radius, color='white')=>{
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI*2, true)
      ctx.fill()
   }
}