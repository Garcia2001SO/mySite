export { keyDownIn }

function keyDownIn(element){
   return (keyCode, func)=>{
      element.addEventListener('keydown', (e)=>{
         if(e.keyCode == keyCode){ func() }
      })
   }
}