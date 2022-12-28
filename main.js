const share = document.querySelector(".shareIcon")
const icons = document.querySelector(".icons")
const container = document.querySelector(".shareButton")
estado = "apagado"

const mostrar = () => {
    icons.style.opacity = "1"
    container.style.background = "hsl(217, 19%, 35%)"
    estado = "activo"
}
const ocultar = () => {
    if(estado == "activo"){
        icons.style.opacity = "0"
        container.style.background = ""
        estado = "apagado"
    }
}

share.addEventListener("click", mostrar)

if(icons.style.display == "none"){
    share.style.top = "0vw"
    console.log("puto")
}