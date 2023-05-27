"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Turno;
(function (Turno) {
    Turno["MANHA"] = "manh\u00E3";
    Turno["TARDE"] = "tarde";
    Turno["NOITE"] = "noite";
})(Turno || (Turno = {}));
var Area;
(function (Area) {
    Area["HUMANAS"] = "humanas";
    Area["BIOLOGICAS"] = "biol\u00F3gicas";
    Area["EXATAS"] = "exatas";
})(Area || (Area = {}));
function MinLength(minLength) {
    return function (target, key) {
        let val = target[key];
        const getter = () => val;
        const setter = (next) => {
            if (next.length < minLength) {
                throw new Error(`A propriedade ${key} deve ter pelo menos ${minLength} caracteres.`);
            }
            else {
                val = next;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Turma {
    constructor(id, descricao, turno, curso) {
        this.id = id;
        this.descricao = descricao;
        this.turno = turno;
        this.curso = curso;
    }
}
__decorate([
    MinLength(10)
], Turma.prototype, "descricao", void 0);
class CursoManager {
    constructor() {
        this.turmas = [];
    }
    adicionarTurma(turma) {
        this.turmas.push(turma);
    }
    excluirTurma(id) {
        this.turmas = this.turmas.filter(turma => turma.id !== id);
    }
    buscarTurma(id) {
        return this.turmas.find(turma => turma.id === id);
    }
    alterarTurma(id, descricao, turno, curso) {
        const turma = this.buscarTurma(id);
        if (turma) {
            turma.descricao = descricao;
            turma.turno = turno;
            turma.curso = curso;
        }
        else {
            throw new Error("Turma não encontrada!");
        }
    }
    imprimirTurmas() {
        this.turmas.forEach(turma => {
            console.log(`ID: ${turma.id}, Descrição: ${turma.descricao}, Turno: ${turma.turno}, Curso: ${turma.curso.descricao}, Área: ${turma.curso.area}`);
        });
    }
}
let gestorCursos = new CursoManager();
// Criação de algumas turmas
let turma1 = new Turma(1, 'Turma de Matemática', Turno.MANHA, { descricao: 'Curso de Matemática', area: Area.EXATAS });
let turma2 = new Turma(2, 'Turma de Biologia', Turno.TARDE, { descricao: 'Curso de Biologia', area: Area.BIOLOGICAS });
let turma3 = new Turma(3, 'Turma de História', Turno.NOITE, { descricao: 'Curso de História', area: Area.HUMANAS });
// Adicionando as turmas
gestorCursos.adicionarTurma(turma1);
gestorCursos.adicionarTurma(turma2);
gestorCursos.adicionarTurma(turma3);
// Imprimindo todas as turmas
console.log('\n-------------------------------\n');
gestorCursos.imprimirTurmas();
// Alterando uma turma
gestorCursos.alterarTurma(1, 'Turma de Matemática Avançada', Turno.MANHA, { descricao: 'Curso de Matemática Avançada', area: Area.EXATAS });
// Imprimindo todas as turmas após a alteração
console.log('\n-------------------------------\n');
gestorCursos.imprimirTurmas();
// Excluindo uma turma
gestorCursos.excluirTurma(2);
// Imprimindo todas as turmas após a exclusão
console.log('\n-------------------------------\n');
gestorCursos.imprimirTurmas();
// Buscando uma turma
let turmaBuscada = gestorCursos.buscarTurma(3);
console.log('\n-------------------------------\n');
console.log(`Turma Buscada: ${turmaBuscada === null || turmaBuscada === void 0 ? void 0 : turmaBuscada.descricao}`);
