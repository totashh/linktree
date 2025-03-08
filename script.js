function mudarModo() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#container img")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/corinthiansdFundoBranco.png")
    } else {
        img.setAttribute("src", "./assets/corinthiansdFundoPreto.jpg")
    }
}