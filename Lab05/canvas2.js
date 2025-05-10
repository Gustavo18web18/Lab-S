window.addEventListener("load", () => {
  const canvas = document.getElementById("meuCanvas2");
  const ctx = canvas.getContext("2d");

  // 1) Céu
  function desenharCeu() {
    ctx.fillStyle = "#80E6C2";
    ctx.fillRect(0, 0, 300, 300);
  }

  // 2) Chão
  function desenharChao() {
    ctx.fillStyle = "#757575";
    ctx.fillRect(0, 200, 300, 100);
  }

  // 3) Água (retângulo + quarto de círculo)
  function desenharAgua() {
    ctx.fillStyle = "#42A5F5";
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(0, 300);
    ctx.lineTo(100, 300);
    ctx.arc(100, 300, 100, Math.PI, 1.5 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
  }

  // 4) Sol
  function desenharSol() {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(240, 60, 30, 0, 2 * Math.PI);
    ctx.fill();
  }

  // 5) Casa (corpo + telhado)
  function desenharCasa() {
    // corpo
    ctx.fillStyle = "#795548";
    ctx.fillRect(100, 100, 100, 100);
    // telhado
    ctx.fillStyle = "#F1654D";
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(150, 60);
    ctx.lineTo(200, 100);
    ctx.closePath();
    ctx.fill();
  }

  // 6) Janelas
  function desenharJanelas() {
    ctx.fillStyle = "#4FC3F7";
    ctx.fillRect(115, 115, 20, 20);
    ctx.fillRect(165, 115, 20, 20);
  }

  // 7) Porta
  function desenharPorta() {
    ctx.fillStyle = "#5D4037";
    ctx.fillRect(140, 150, 20, 50);
  }

  // 8) Árvore genérica
  function desenharArvore(x, y) {
    // tronco
    ctx.fillStyle = "#6D4C41";
    ctx.fillRect(x, y, 10, 40);
    // copa
    ctx.fillStyle = "#2E7D32";
    ctx.beginPath();
    ctx.arc(x + 5, y - 10, 20, 0, 2 * Math.PI);
    ctx.fill();
  }

  // chama tudo na ordem certa
  desenharCeu();
  desenharChao();
  desenharAgua();
  desenharSol();
  desenharCasa();
  desenharJanelas();
  desenharPorta();
  desenharArvore(50, 170);   // árvore esquerda
  desenharArvore(240, 180);  // árvore direita
});
