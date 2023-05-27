"use strict";
var Categorias;
(function (Categorias) {
    Categorias["Fantasy"] = "Fantasy";
    Categorias["Fiction"] = "Fiction";
    Categorias["ScienceFiction"] = "Science Fiction";
    Categorias["Biography"] = "Biography";
})(Categorias || (Categorias = {}));
const livro1 = {
    nomeLivro: "A Game of Thrones",
    preco: 29.99,
    categoria: Categorias.Fantasy,
};
const livro2 = {
    nomeLivro: "The Hobbit",
    preco: 19.99,
    categoria: Categorias.Fantasy,
};
const livro3 = {
    nomeLivro: "1984",
    preco: 14.99,
    categoria: Categorias.Fiction,
};
const livro4 = {
    nomeLivro: "up",
    preco: 14.99,
    categoria: Categorias.Fiction,
};
const livro5 = {
    nomeLivro: "teste",
    preco: 14.99,
};
let biblioteca = { "Centro": livro1, "Zona Norte": livro2, "Zona Sul": livro3, "Zona Leste": livro4, "Zona Oeste": livro5 };
// console.log(biblioteca.Centro);
// console.log(biblioteca["Zona Norte"]);
// console.log(biblioteca["Zona Sul"]);
// console.log(biblioteca["Zona Leste"]);
// console.log(biblioteca["Zona Oeste"]);
for (let unidade in biblioteca) {
    console.log('------------------------------------------------');
    let livro = biblioteca[unidade];
    let nomeLivro = livro.nomeLivro.split(' ').length > 1 ? livro.nomeLivro.toLowerCase() : livro.nomeLivro.toUpperCase();
    console.log(`
    Unidade: ${unidade}
      Nome: ${nomeLivro}
      Preço: ${livro.preco}
      Categoria: ${livro.categoria ? livro.categoria : 'Categoria não definida'}`);
}
