
var pages=document.querySelector(".pages")
 function adding(){ 
    var addpage=document.createElement("div")
    addpage.setAttribute("class","pages")
    addpage.innerHTML='<textarea></textarea>'+
    "<button onclick='deleteButton(event)'>Delete</button>"
    pages.appendChild(addpage)
   }
function deleteButton(event)
{
   event.target.parentElement.remove()
}