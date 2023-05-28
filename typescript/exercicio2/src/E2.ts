enum Categorias {
    Fantasy = 'Fantasy',
    Fiction = 'Fiction',
    ScienceFiction = 'Science Fiction',
    Biography = 'Biography',
}

type Livro = {
    nomeLivro: string;
    preco: number;
    categoria?: Categorias;
  };
  
  const biblioteca: Livro[] = [
    {
      nomeLivro: "A Game of Thrones",
      preco: 29.99,
      categoria: Categorias.Fantasy,
    },
    {
      nomeLivro: "The Hobbit",
      preco: 19.99,
    },
    {
      nomeLivro: "1984",
      preco: 14.99,
      categoria: Categorias.Fiction,
    },
  ];
  
  // Imprimindo nome do Livro, preço e categoria de cada livro
  for (let livro of biblioteca) {
      console.log('------------------------------------------------');
      console.log(`
      Nome: ${livro.nomeLivro}
      Preço: ${livro.preco}
      Categoria: ${livro.categoria ? livro.categoria : 'Categoria não definida'}`);
  }
  