type Status = "EM_ESTOQUE" | "ESGOTADO";
class Produto {
  private static _counter = 0;
  private nome: string;
  private categoria: string;
  private preco: number;
  private status: Status;
  private codigo: number;
  constructor(nome: string, categoria: string, preco: number, status: Status) {
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.status = status;
    this.codigo = Produto._counter++;
  }
  get getNome() {
    return this.nome;
  }
  get getCategoria() {
    return this.categoria;
  }
  set setNome(nome: string) {
    this.nome = nome;
  }
  set setCategoria(categoria: string) {
    this.categoria = categoria;
  }
  get getPreco() {
    return this.preco;
  }

  set setPreco(preco: number) {
    this.preco = preco;
  }

  get getStatus() {
    return this.status;
  }

  set setStatus(status: Status) {
    this.status = status;
  }

  get getCodigo() {
    return this.codigo;
  }
  adicionar(): void {
    this.mudarStatus("EM_ESTOQUE");
    console.log(`Produto ${this.nome}, categoria:
        ${this.categoria}`);
  }
  protected mudarStatus(status: Status): void {
    if (status === "EM_ESTOQUE") {
      this.status = "EM_ESTOQUE";
    } else {
      this.status = "ESGOTADO";
    }
  }
}

class ProdutoInfantil extends Produto {
  //@ts-ignore
  private _faixa_etaria: number;
  constructor(
    nome: string,
    categoria: string,
    preco: number,
    status: Status,
    _faixa_etaria: number
  ) {
    super(nome, categoria, preco, status);
    this.faixaEtariaValida(_faixa_etaria);
  }
  get faixaEtaria() {
    return this._faixa_etaria;
  }

  set faixaEtaria(faixa_etaria: number) {
    this.faixaEtariaValida(faixa_etaria);
  }

  private faixaEtariaValida(faixa_etaria: number): void {
    if (faixa_etaria >= 0 && faixa_etaria <= 12) {
      this._faixa_etaria = faixa_etaria;
    } else {
      throw new Error("Faixa etária deve estar entre 0 e 12 anos.");
    }
  }
}

const novoProduto = new ProdutoInfantil(
  "Shampoo",
  "Cuidados Pessoais",
  30,
  "ESGOTADO",
  11
);
novoProduto.adicionar();
console.log(novoProduto.getNome);
console.log(novoProduto.getStatus);
