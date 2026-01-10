let password = document.querySelector("#passInput");
let conPassword = document.querySelector("#confirmInput");
let passwordContainer = document.querySelector(".passContainer");
let error = document.createElement("p");

conPassword.addEventListener("input",(e)=>{

    if(e.target.value.trim()!=password.value.trim()){
        error.style.color = "red";
        error.innerText = "password do not match";
        passwordContainer.appendChild(error);
    }
    else{
        error.innerText= "";
    }
})