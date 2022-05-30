// Add the coffee to local storage with key "coffee"

async function getData(){
const url=`https://masai-mock-api.herokuapp.com/coffee/menu`
console.log(url)

let res=await fetch(url);
let data=await res.json()
let menu=data.menu.data
console.log(menu)
show(menu)
}
getData()

function show(menu){
    
    menu.forEach(function(el){
        let div=document.createElement("div")
        let img=document.createElement("img");
        img.src=el.image
        let name=document.createElement("p")
        name.innerText=el.title
        let price=document.createElement("p")
price.innerText=el.price      
let bucket=document.createElement("button")
bucket.textContent="add to bucket" 
bucket.addEventListener("click",function(){
    addtobucket(el)
}) 
        div.append(img,name,price,bucket)
        document.querySelector("#menu").append(div)    
    
    });
}
let bucket=JSON.parse(localStorage.getItem("coffee"))||[]
 function addtobucket(el){
bucket.push(el)
localStorage.setItem("coffee",JSON.stringify(bucket))
 }