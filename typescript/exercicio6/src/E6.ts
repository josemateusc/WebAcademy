type DadosConta = {
  nome: string;
  numero: string;
  endereco?: string;
};

abstract class ContaBanco {
  protected nome: string;
  protected numero: string;
  protected saldo: number;
  protected endereco: string | undefined;

  constructor(dados: DadosConta, saldoInicial: number = 0) {
    this.nome = dados.nome;
    this.numero = dados.numero;
    this.endereco = dados.endereco;
    this.saldo = saldoInicial;
  }

  //get and setters
    get getNome() {
    return this.nome;
    }
    get getNumero() {
    return this.numero;
    }
    get getEndereco() {
    return this.endereco;
    }

  sacar(valor: number): void {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`\nSaque de ${valor} realizado com sucesso.`);
    } else {
      console.log(`\nSaldo insuficiente para saque.`);
    }
  }

  depositar(valor: number): void {
    this.saldo += valor;
    console.log(`\nDepósito de ${valor} realizado com sucesso.`);
  }

  getSaldo(): number {
    return this.saldo;
  }
}

class PessoaFisica extends ContaBanco {
  cpf: string;
  dataNascimento: Date;
  nomeMae: string;

  constructor(
    dados: DadosConta,
    cpf: string,
    dataNascimento: Date,
    nomeMae: string,
    saldoInicial?: number
  ) {
    super(dados, saldoInicial);
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.nomeMae = nomeMae;
  }
}

class PessoaJuridica extends ContaBanco {
  cnpj: string;
  razaoSocial: string;
  socios: string[];

  constructor(
    dados: DadosConta,
    cnpj: string,
    razaoSocial: string,
    socios: string[],
    saldoInicial?: number
  ) {
    super(dados, saldoInicial);
    this.cnpj = cnpj;
    this.razaoSocial = razaoSocial;
    this.socios = socios;
  }
}

class Cliente {
  nome: string;
  conta: ContaBanco | null;

  constructor(nome: string) {
    this.nome = nome;
    this.conta = null;
  }

  adicionarConta(conta: ContaBanco): void {
    this.conta = conta;
    console.log(`\nConta adicionada com sucesso ao cliente ${this.nome}`);
  }
}

class Agencia {
  contas: Array<ContaBanco>;

  constructor() {
    this.contas = [];
  }

  adicionarConta(conta: ContaBanco): void {
    this.contas.push(conta);
    console.log(`\nConta de ${conta.getNome} adicionada com sucesso à agência.`);
  }

  exibirClientes(): void {
    this.contas.forEach((conta) =>
      console.log(`\nCliente: ${conta.getNome}, Conta: ${conta.getNumero}`)
    );
  }
}

// Criando uma nova agência
let agencia = new Agencia();

// Criando novos clientes
let cliente1 = new Cliente("João");
let cliente2 = new Cliente("Empresa XYZ");

// Criando novas contas bancárias
let contaPF = new PessoaFisica(
  { nome: "João", numero: "1234" }, 
  "111.111.111-11", 
  new Date(1990, 1, 1), 
  "Maria"
);

let contaPJ = new PessoaJuridica(
  { nome: "Empresa WebAcademy", numero: "5678" }, 
  "00.000.000/0001-00", 
  "Empresa XYZ Ltda",
  ["Sócio 1", "Sócio 2"]
);

// Adicionando as contas aos clientes
cliente1.adicionarConta(contaPF);
cliente2.adicionarConta(contaPJ);

console.log("\n-------------------------------------------------");

// Adicionando as contas à agência
agencia.adicionarConta(contaPF);
agencia.adicionarConta(contaPJ);

console.log("\n-------------------------------------------------");

// Realizando operações bancárias
contaPF.depositar(1000);
contaPF.sacar(500);

console.log("\n-------------------------------------------------");

contaPJ.depositar(2000);
contaPJ.sacar(1000);
contaPJ.sacar(1500);

console.log("\n-------------------------------------------------");

// Verificando os saldos
console.log(`\nSaldo da conta de João: ${contaPF.getSaldo()}`);
console.log(`\nSaldo da conta da Empresa XYZ: ${contaPJ.getSaldo()}`);

console.log("\n-------------------------------------------------");

// Exibindo todos os clientes da agência
agencia.exibirClientes();
