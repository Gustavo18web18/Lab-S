const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const usuarios = []; // Simulando banco de dados

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'projects.html'));
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/cadastra', (req, res) => {
  res.render('cadastro');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const usuario = usuarios.find(u => u.username === username && u.password === password);

  if (usuario) {
    res.render('resposta', { status: 'Login bem-sucedido!' });
  } else {
    res.render('resposta', { status: 'Login falhou: usuário ou senha incorretos.' });
  }
});

app.post('/cadastra', (req, res) => {
  const { username, password } = req.body;
  const existente = usuarios.find(u => u.username === username);

  if (existente) {
    res.render('resposta', { status: 'Usuário já cadastrado!' });
  } else {
    usuarios.push({ username, password });
    res.render('resposta', { status: 'Usuário cadastrado com sucesso!',username });
  }
});


app.get('/Login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'Login.html'));
});

app.get('/Cadastro.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'Cadastro.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
