const toggler = document.getElementById("toggle-circle");
const togglerBg = document.getElementById("toggle");


const body = document.body;
togglerBg.addEventListener("click", function(){
    if(body.classList.contains("dark")){
        body.classList.replace("dark", "light");
        toggler.style.transform = "translateX(20px)"; 
    }

    else {
        body.classList.replace("light", "dark");
        toggler.style.transform = "translateX(0)"; 
    }
});