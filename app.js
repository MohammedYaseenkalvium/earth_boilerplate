//body
var bodyvar = document.body 

//four buttons
var consumption =  document.getElementById("consumption")
console.log(consumption)
var climate =  document.getElementById("climate")
console.log(climate)
var resources = document.getElementById("resources")
console.log(resources)
var people = document.getElementById("people")
console.log(people)

//save text
var savetext = document.getElementById("save")

//var frame
var frame =  document.getElementById("frame")
// variable declaration is done.........

consumption.onclick=()=>{
// background 
bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png	')"
bodyvar.style.backgroundSize= "100% 100%"


//iframe
frame.src= "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

//save text
savetext.innerHTML=" Do your bit! Shop only what you need,eat only what you need and always save the leftovers.	"

//buttons
consumption.style.backgroundColor="#2EBE55"
//something is missing
climate.style.backgroundColor="transparent"
people.style.backgroundColor="transparent"
resources.style.backgroundColor="transparent"
}
climate.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png	')"
    bodyvar.style.backgroundSize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML=" Do your bit! Save trees, use renewable energy sources and prefer to travel green"
    climate.style.backgroundColor="#367EEE"
    resources.style.backgroundColor="transparent"
    people.style.backgroundColor="transparent"
    consumption.style.backgroundColor="transparent"
    
}

resources.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png ')"
    bodyvar.style.backgroundSize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML="  Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"
    resources.style.backgroundColor="#E59048"
    climate.style.backgroundColor="transparent"
    people.style.backgroundColor="transparent"
    consumption.style.backgroundColor="transparent"
    
}
people.onclick=()=>{
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    people.style.backgroundColor="#D84855"
    savetext.innerHTML=" Do your bit! Never waste  food.Rather offer it to people or animals who are in need."
    climate.style.backgroundColor="transparent"
    resources.style.backgroundColor="transparent"
    consumptionstyle.backgroundColor="transparent"

}








