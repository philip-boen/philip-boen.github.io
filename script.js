let allbtn = document.querySelectorAll("button");

let times = {"red": 0, "blue": 0, "green": 0};

allbtn.forEach(allbutton => allbutton.addEventListener("click", () => {
    console.log(allbutton.value);
    
    times[allbutton.value]+= 1;
    allbutton.innerText = times[allbutton.value];
    allbutton.style.fontSize = "18px";
}));

let clear = () => {
    allbtn.forEach(allbutton => {
    times.red = 0;  
    times.blue = 0;  
    times.green = 0;  
    allbutton.innerText = '';
    });
};

document.querySelector(".clear").addEventListener("click", clear);