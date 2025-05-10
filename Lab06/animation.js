// 1) Seleciona canvas e contexto
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// 2) Prepara a imagem (coloque um arquivo 'character.png' em uma pasta 'img/')
const img = new Image();
img.src = 'https://querocookie.com.br/img/cookie.webp';  // ajuste o caminho e o nome conforme seu arquivo
// Tamanho desejado para desenhar (você pode alterar se precisar)
const IMG_W = 50;
const IMG_H = 50;

// Posição inicial (centro do canvas)
let posX = canvas.width / 2;
let posY = canvas.height / 2;

// Quando a imagem carrega, inicia o loop de animação
img.onload = () => {
  // 3) Captura movimento do mouse sobre o canvas
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    // coordenadas do ponteiro dentro do canvas
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // 4) Centraliza o mouse na imagem E impede de sair da área:
    posX = Math.max(IMG_W/2, Math.min(x, canvas.width - IMG_W/2));
    posY = Math.max(IMG_H/2, Math.min(y, canvas.height - IMG_H/2));
  });

  // 5) Inicia animação
  requestAnimationFrame(animate);
};

function animate() {
  // limpa tudo
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // desenha a imagem com o ponteiro no centro dela
  ctx.drawImage(
    img,
    posX - IMG_W/2, 
    posY - IMG_H/2, 
    IMG_W, 
    IMG_H
  );
  // repete
  requestAnimationFrame(animate);
}
