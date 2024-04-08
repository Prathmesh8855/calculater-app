let btn = document.querySelectorAll("#but");

let input = document.querySelector("input");
let string = "";

btn.forEach((buton)=>{
   buton.addEventListener("click", (e)=>{
    if(e.target.innerHTML == "="){
        string = eval(string);
        input.value = string;
    }
    else{
     let a =e.target.innerHTML;
     string = string +a ;
     input.value = string
    }
    if(e.target.innerHTML == "AC" || e.target.innerHTML == "C"){
        string = "";
        input.value = string;
    }
   })
})

 