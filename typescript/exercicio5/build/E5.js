"use strict";
class Produto {
    constructor(nome, categoria, preco, status) {
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
    set setNome(nome) {
        this.nome = nome;
    }
    set setCategoria(categoria) {
        this.categoria = categoria;
    }
    get getPreco() {
        return this.preco;
    }
    set setPreco(preco) {
        this.preco = preco;
    }
    get getStatus() {
        return this.status;
    }
    set setStatus(status) {
        this.status = status;
    }
    get getCodigo() {
        return this.codigo;
    }
    adicionar() {
        this.mudarStatus("EM_ESTOQUE");
        console.log(`Produto ${this.nome}, categoria:
        ${this.categoria}`);
    }
    mudarStatus(status) {
        if (status === "EM_ESTOQUE") {
            this.status = "EM_ESTOQUE";
        }
        else {
            this.status = "ESGOTADO";
        }
    }
}
Produto._counter = 0;
class ProdutoInfantil extends Produto {
    constructor(nome, categoria, preco, status, _faixa_etaria) {
        super(nome, categoria, preco, status);
        this.faixaEtariaValida(_faixa_etaria);
    }
    get faixaEtaria() {
        return this._faixa_etaria;
    }
    set faixaEtaria(faixa_etaria) {
        this.faixaEtariaValida(faixa_etaria);
    }
    faixaEtariaValida(faixa_etaria) {
        if (faixa_etaria >= 0 && faixa_etaria <= 12) {
            this._faixa_etaria = faixa_etaria;
        }
        else {
            throw new Error("Faixa etária deve estar entre 0 e 12 anos.");
        }
    }
}
const novoProduto = new ProdutoInfantil("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO", 11);
novoProduto.adicionar();
console.log(novoProduto.getNome);
console.log(novoProduto.getStatus);
