//Ejercicio 1
const imagen = document.getElementById("miImagen");

imagen.addEventListener("click", () => {
  imagen.classList.toggle("borde-rojo");
});

//Ejercicio 2

function verificarStickers() {
  const s1 = parseInt(document.getElementById("sticker1").value) || 0;
  const s2 = parseInt(document.getElementById("sticker2").value) || 0;
  const s3 = parseInt(document.getElementById("sticker3").value) || 0;

  const total = s1 + s2 + s3;
  const resultado = document.getElementById("resultado");

  if (total <= 10) {
    resultado.textContent = `✅ Llevas ${total} stickers`;
    resultado.style.color = "#00ff88";
  } else {
    resultado.textContent = "❌ Llevas demasiados stickers";
    resultado.style.color = "#ff4444";
  }
}

//Ejercicio 3

function verificarPassword() {
  const d1 = document.getElementById("digito1").value;
  const d2 = document.getElementById("digito2").value;
  const d3 = document.getElementById("digito3").value;

  const password = d1 + d2 + d3;
  const mensaje = document.getElementById("mensaje");

  if (password === "911") {
    mensaje.textContent = "✅ password 1 correcto";
    mensaje.style.color = "#00ff88";
  } else if (password === "714") {
    mensaje.textContent = "✅ password 2 es correcto";
    mensaje.style.color = "#00ff88";
  } else {
    mensaje.textContent = "❌ password incorrecto";
    mensaje.style.color = "#ff4444";
  }
}
