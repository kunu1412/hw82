canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouseevents="empty"
var lastpostofx
var lastpostofy
 canvas.addEventListener("mousedown",mouse_down)
 function mouse_down(e){
        mouseevents="mousedown"
    console.log("mousedown is working")
 } 
 canvas.addEventListener("mouseup",mouseup)
 function mouseup(e){
    mouseevents="mouseup"
    console.log("mouse up is working")
 }
canvas.addEventListener("mouseleave",mouseleave)
function mouseleave(e){
    mouseevents="mouseleave"
    console.log("mouse leave is working")

}
canvas.addEventListener("mousemove",mousemove)
function mousemove(e){
    currentpostofx=e.clientX-canvas.offsetLeft
    console.log(currentpostofx)
    currentpostofy=e.clientY-canvas.offsetTop
    console.log(currentpostofy)
    if (mouseevents=="mousedown")
        {ctx.beginPath()
        console.log("begin path working")
        ctx.strokeStyle="blue"
        console.log("01 working")
        ctx.lineWidth=2
        console.log("02 working")
        ctx.arc(currentpostofx,currentpostofy,40,0,360)
        ctx.stroke()
    }
    lastpostofx=currentpostofx
    lastpostofy=currentpostofy}
    function circle(mousex,mousey){
        ctx.beginPath();
        ctx.strokeStyle="green"
        ctx.lineWidth=8;
        ctx.arc(mousex,mousey,40,0,360)
        ctx.stroke()
    
}