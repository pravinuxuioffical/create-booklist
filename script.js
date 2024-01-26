
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopup=document.getElementById("add-popup")

addpopup.addEventListener("click",function(){
          popupoverlay.style.display="block"
          popupbox.style.display="block"
})

var cancelbutton=document.querySelector(".cancelbook")
cancelbutton.addEventListener("click",function(event){
          event.preventDefault()
          popupoverlay.style.display="none"
          popupbox.style.display="none"
})
 
// select container-col,add-popup,bookname-input,author-input,description-input

var container=document.querySelector(".container")
var addbookbtn=document.querySelector(".addbook")
var booktitle=document.getElementById("bookname-input")
var bookauthor=document.getElementById("author-input")
var bookdescription=document.getElementById("description-input")

addbookbtn.addEventListener("click",function(event){
          event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","container-col")
div.innerHTML=`<h2>${booktitle.value}</h2>
                <h3>${bookauthor.value}</h3>
                <p>${bookdescription.value}</p>
                <button onclick="deletebook(event)">delete</button>`
container.append(div)

popupoverlay.style.display="none"
popupbox.style.display="none"
})

function deletebook(event){
          event.target.parentElement.remove()
}