window.addEventListener("load", () => {
    const canvas = document.getElementById("meuCanvas1");
    const ctx = canvas.getContext("2d");
  
    // --- Funções de desenho genéricas ---
    function desenhar_quadrado(x, y, cor, tam = 30) {
      ctx.fillStyle = cor;
      ctx.fillRect(x, y, tam, tam);
    }
    function desenhar_linha(x1, y1, x2, y2, cor = "black") {
      ctx.strokeStyle = cor;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    function desenhar_arco(x, y, r, ai, af, cor) {
      ctx.strokeStyle = cor;
      ctx.beginPath();
      ctx.arc(x, y, r, ai, af);
      ctx.stroke();
    }
    function desenhar_circulo(x, y, r, cor) {
      ctx.fillStyle = cor;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
    }
    function escrever(texto, x, y, cor = "black") {
      ctx.fillStyle = cor;
      ctx.font = "18px Arial";
      ctx.textAlign = "center";
      ctx.fillText(texto, x, y);
    }
  
    // --- Limpa o fundo e desenha o Modelo 1 ---
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Cantos superiores
    desenhar_quadrado(0, 0, "blue", 50);
    desenhar_quadrado(250, 0, "red", 50);
  
    // Diagonais
    desenhar_linha(0, 0, 150, 150, "blue");
    desenhar_linha(300, 0, 150, 150, "red");
  
    // Texto
    escrever("Canvas", 150, 70);
  
    // Linhas centrais verdes
    desenhar_linha(0, 150, 300, 150, "green");
    desenhar_linha(150, 150, 150, 300, "green");
  
    // Arcos superiores
    desenhar_arco(150, 150, 60, Math.PI, 0, "green");
    desenhar_arco(150, 150, 40, Math.PI, 0, "green");
    desenhar_arco(150, 150, 20, Math.PI, 0, "green");
  
    // Círculo central ciano
    desenhar_circulo(150, 130, 12, "cyan");
  
    // Quadrado vermelho no centro
    desenhar_quadrado(135, 150, "red", 30);
  
    // Quadradinhos cyan laterais
    desenhar_quadrado(20, 135, "cyan", 20);
    desenhar_quadrado(260, 135, "cyan", 20);
  
    // Círculos amarelos
    desenhar_circulo(60, 210, 12, "yellow");
    desenhar_circulo(240, 210, 12, "yellow");
  
    // Escada esquerda (amarelo)
    desenhar_quadrado(0, 270, "yellow");
    desenhar_quadrado(30, 270, "yellow");
    desenhar_quadrado(0, 240, "yellow");
  
    // Escada direita (preto)
    desenhar_quadrado(270, 270, "black");
    desenhar_quadrado(240, 270, "black");
    desenhar_quadrado(270, 240, "black");
  
    // Arco inferior grande
    desenhar_arco(150, 300, 60, Math.PI, 2 * Math.PI, "green");
  
    // Semicírculo inferior preenchido
    ctx.beginPath();
    ctx.fillStyle = "cyan";
    ctx.arc(150, 300, 30, Math.PI, 2 * Math.PI);
    ctx.fill();
  });
  