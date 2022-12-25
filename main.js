const share = document.querySelector(".shareIcon")
const icons = document.querySelector(".icons")
estado = "apagado"

const mostrar = () => {
    icons.style.opacity = "1"
    estado = "activo"
}
const ocultar = () => {
    if(estado == "activo"){
        icons.style.opacity = "0"
        estado = "apagado"
    }
}

share.addEventListener("click", mostrar)

if(icons.style.display == "none"){
    share.style.top = "0vw"
    console.log("puto")
}