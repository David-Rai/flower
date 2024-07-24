let loader = document.querySelector(".loader");
let trigger = document.querySelector(".loader .input button");
let pass = document.querySelector(".loader .input input");
let heading=document.querySelector(".input h1")
console.log(heading)

trigger.addEventListener("click", () => {
let Fpass=pass.value
if(Fpass==="instagram##321"){
    console.log("you are numa")
    loader.style.display="none"
}else{
heading.innerText="You are not!!!"
}

});
