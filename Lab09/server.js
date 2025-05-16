const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();
const PORT = 80;

// Configurações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Página inicial redireciona para projects
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "projects.html"));
});

// Página de blog
app.get("/blog", (req, res) => {
  db.all("SELECT * FROM posts ORDER BY id DESC", (err, rows) => {
    if (err) return res.send("Erro ao buscar posts.");
    res.render("blog", { posts: rows });
  });
});

// Rota de cadastro do post
app.post("/cadastrar_post", (req, res) => {
  const { titulo, resumo, conteudo } = req.body;
  db.run("INSERT INTO posts (titulo, resumo, conteudo) VALUES (?, ?, ?)", 
    [titulo, resumo, conteudo],
    (err) => {
      if (err) return res.send("Erro ao cadastrar post.");
      res.redirect("/blog");
    });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
