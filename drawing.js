var colour;
var fontSize;
function FontSize()
{
    var inputvalue=document.querySelector("#font-size").value;
    fontSize=Number(inputvalue);
}
window.addEventListener("load",()=>{
    const canvas = document.querySelector("#canvas");
    const ctx=canvas.getContext("2d");
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    let paint=false;
    function  downEvent()
    {
        paint=true;  
        moveEvent();
    }
    function upEvent(){
        paint=false;
        ctx.beginPath();  
    }
    function moveEvent(e)
    {
        if(!paint) return;
        if(ctx.lineWidth==null)
        {
            ctx.lineWidth=1;
        }
        ctx.lineWidth=fontSize;
        ctx.lineCap="round";
        ctx.strokeStyle=colour;
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
    }
    canvas.addEventListener("mousedown",downEvent);
    canvas.addEventListener("mouseup",upEvent);
    canvas.addEventListener("mousemove",moveEvent);
});
function red()
{
    colour="red";
}
function blue()
{
    colour="blue";
}
function brown()
{
    colour="brown";
}
function pink()
{
    colour="pink";
}