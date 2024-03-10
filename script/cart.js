let cartButton = document.getElementsByClassName("cartButton")
let products = document.getElementsByClassName("number")[0]
const cart = document.getElementsByClassName("cartBox")[0]

if (sessionStorage.getItem("productsNumber")) {
    products.value = sessionStorage.getItem("productsNumber")
}

for (i = 0; i < cartButton.length; i++){
    cartButton[i].addEventListener("click", (event) => {
        cart.style.display = "block"
        let productsNumber = parseInt(products.value)
        productsNumber++
        products.value = productsNumber
        sessionStorage.setItem("productsNumber", productsNumber)
    })
}