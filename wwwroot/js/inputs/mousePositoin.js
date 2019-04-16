export { getMousePosIn }

function getMousePosIn(element){
   const mousePos = {}
   element.addEventListener('mousemove', 
   function(evt){
      const rect = element.getBoundingClientRect()
      const root = document.documentElement
      const mouseX = evt.clientX - rect.left - root.scrollLeft
      const mouseY = evt.clientY - rect.top - root.scrollTop

      mousePos.x = mouseX
      mousePos.y = mouseY
   })

   return mousePos
}