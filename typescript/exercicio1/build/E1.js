"use strict";
const biblioteca = [
    {
        nomeLivro: "A Game of Thrones",
        preco: 29.99,
        categoria: "Fantasy",
    },
    {
        nomeLivro: "The Hobbit",
        preco: 19.99,
        categoria: "Fantasy",
    },
    {
        nomeLivro: "1984",
        preco: 14.99,
        categoria: "Fiction",
    },
];
// Imprimindo nome do Livro, preço e categoria de cada livro
for (let livro of biblioteca) {
    console.log('------------------------------------------------');
    console.log(`
    Nome: ${livro.nomeLivro}
    Preço: ${livro.preco}
    Categoria: ${livro.categoria}`);
}
