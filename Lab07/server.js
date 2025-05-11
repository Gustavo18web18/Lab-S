// 1) Inclui módulos necessários
var http     = require('http');      
var express  = require('express');

// 2) Cria a aplicação Express
var app      = express();

// 3) Define onde estão seus arquivos estáticos (HTML, CSS, JS, imagens)
app.use(express.static('./public'));

// 4) Cria o servidor HTTP “embrulhando” o Express
var server   = http.createServer(app);

// 5) Diz em qual porta o servidor vai “ouvir” requisições  
server.listen(3000);

// 6) Mensagem de debug para confirmar que está rodando
console.log("Servidor rodando na porta 3000...");
