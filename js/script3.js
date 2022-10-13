const pagos = document.getElementById("continuar")
const contenido = document.querySelector("#body")
pagos.addEventListener("click", () => {
  window.localStorage.setItem('pago', 3)
  window.location.href = "./documentos.html"
})

const tomarPago = localStorage.getItem("pago")

  const pagado = () => {
    if(tomarPago === "3"){
      pagos.innerHTML = " "
      contenido.innerHTML = ""
    }
  }
  if(tomarPago === "3"){
    pagos.innerHTML = " "
  }
  
