const pass = document.getElementById("pass")
const eyeOpen = document.getElementById("eyeOpen")
const eyeClose = document.getElementById("eyeClose")

eyeOpen.addEventListener("click", e => {
    if(pass.type == "password"){
        pass.type = "text"
        eyeOpen.hidden = 1
        eyeClose.hidden = 0
    }
})

eyeClose.addEventListener("click", e => {
    if(pass.type == "text"){
        pass.type = "password"
        eyeOpen.hidden = 0
        eyeClose.hidden = 1
    }
})