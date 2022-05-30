// On clicking remove button the item should be removed from DOM as well as localstorage.
var bucket=JSON.parse(localStorage.getItem("coffee"))||[]
console.log("bucket:",bucket)
let total=0
bucket.map(function(el,index){
    
    let div=document.createElement("div")
    let image=document.createElement("img")

    image.src=el.image 
    let name=document.createElement("p")
    name.innerText=el.title


let price=document.createElement("p")
price.innerText=el.price
      total=total+Number(el.price)
      console.log(total)
      
let bucket=document.createElement("button")
bucket.textContent="Remove" 
bucket.addEventListener("click",function(){
    removefrombucket(el,index)
})
div.append(image,name,price,bucket) 
document.querySelector("#bucket").append(div)

})
document.querySelector("#total_amount").append(total)
function removefrombucket(el,index){
bucket.splice(index,1)
localStorage.setItem("coffee",JSON.stringify(bucket))
window.location.reload()
}