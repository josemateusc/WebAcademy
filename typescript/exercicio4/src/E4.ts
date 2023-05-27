enum Categorias {
  Fantasy = "Fantasy",
  Fiction = "Fiction",
  ScienceFiction = "Science Fiction",
  Biography = "Biography",
}

type Livro = {
  nomeLivro: string;
  preco: number;
  categoria?: Categorias;
};

const livro1 = {
    nomeLivro: "A Game of Thrones",
    preco: 29.99,
    categoria: Categorias.Fantasy,
  }
const livro2 ={
    nomeLivro: "The Hobbit",
    preco: 19.99,
    categoria: Categorias.Fantasy,
  }
const livro3 = {
    nomeLivro: "1984",
    preco: 14.99,
    categoria: Categorias.Fiction,
  }
const livro4 = {
    nomeLivro: "up",
    preco: 14.99,
    categoria: Categorias.Fiction,
}

const livro5 = {
    nomeLivro: "teste",
    preco: 14.99,
}

type unidades = "Centro" | "Zona Norte" | "Zona Sul" | "Zona Leste" | "Zona Oeste";

type map = {[key in unidades]: Livro};

let biblioteca: map = { "Centro": livro1, "Zona Norte": livro2, "Zona Sul": livro3, "Zona Leste": livro4, "Zona Oeste": livro5 };

// console.log(biblioteca.Centro);
// console.log(biblioteca["Zona Norte"]);
// console.log(biblioteca["Zona Sul"]);
// console.log(biblioteca["Zona Leste"]);
// console.log(biblioteca["Zona Oeste"]);
for (let unidade in biblioteca) {
    console.log('------------------------------------------------');
    let livro = biblioteca[unidade as unidades];
    let nomeLivro = livro.nomeLivro.split(' ').length > 1 ? livro.nomeLivro.toLowerCase() : livro.nomeLivro.toUpperCase();
    console.log(`
    Unidade: ${unidade}
      Nome: ${nomeLivro}
      Preço: ${livro.preco}
      Categoria: ${livro.categoria ? livro.categoria : 'Categoria não definida'}`);
}