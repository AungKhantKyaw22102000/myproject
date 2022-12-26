const chkToggle = document.querySelector("#switch2")
const theme = localStorage.getItem("theme")

document.body.classList.toggle(theme === "dark" ? "dark" : "light")

if (theme == "dark"){
    chkToggle.checked = true
}

else {
    chkToggle.checked = false
}

chkToggle.addEventListener("change", function (e){

    e.preventDefault()
    if (this.checked) {
        document.body.classList.add("dark")
        document.body.classList.remove("light")
        localStorage.setItem("theme", "dark")
        console.log("dark mode");
    }
    else{
        document.body.classList.add("light")
        document.body.classList.remove("dark")
        localStorage.setItem("theme", "light")
        console.log("light mode");
    }
})