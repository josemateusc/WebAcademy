enum Turno {
    MANHA = "manhã",
    TARDE = "tarde",
    NOITE = "noite"
}

enum Area {
    HUMANAS = "humanas",
    BIOLOGICAS = "biológicas",
    EXATAS = "exatas"
}

interface Curso {
    descricao: string;
    area: Area;
}


function MinLength(minLength: number) {
    return function(target: any, key: string) {
        let val = target[key];
        const getter = () => val;
        const setter = (next: string) => {
            if (next.length < minLength) {
                throw new Error(`A propriedade ${key} deve ter pelo menos ${minLength} caracteres.`);
            } else {
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
    readonly id: number;
    
    @MinLength(10)
    descricao: string;
    
    turno: Turno;
    curso: Curso;

    constructor(id: number, descricao: string, turno: Turno, curso: Curso) {
        this.id = id;
        this.descricao = descricao;
        this.turno = turno;
        this.curso = curso;
    }
}

class CursoManager {
    private turmas: Turma[] = [];

    adicionarTurma(turma: Turma): void {
        this.turmas.push(turma);
    }

    excluirTurma(id: number): void {
        this.turmas = this.turmas.filter(turma => turma.id !== id);
    }

    buscarTurma(id: number): Turma | undefined {
        return this.turmas.find(turma => turma.id === id);
    }

    alterarTurma(id: number, descricao: string, turno: Turno, curso: Curso): void {
        const turma = this.buscarTurma(id);
        if (turma) {
            turma.descricao = descricao;
            turma.turno = turno;
            turma.curso = curso;
        } else {
            throw new Error("Turma não encontrada!");
        }
    }

    imprimirTurmas(): void {
        this.turmas.forEach(turma => {
            console.log(`ID: ${turma.id}, Descrição: ${turma.descricao}, Turno: ${turma.turno}, Curso: ${turma.curso.descricao}, Área: ${turma.curso.area}`);
        });
    }
}


let gestorCursos = new CursoManager();

// Criação de algumas turmas
let turma1 = new Turma(1, 'Turma de Matemática', Turno.MANHA, {descricao: 'Curso de Matemática', area: Area.EXATAS});
let turma2 = new Turma(2, 'Turma de Biologia', Turno.TARDE, {descricao: 'Curso de Biologia', area: Area.BIOLOGICAS});
let turma3 = new Turma(3, 'Turma de História', Turno.NOITE, {descricao: 'Curso de História', area: Area.HUMANAS});

// Adicionando as turmas
gestorCursos.adicionarTurma(turma1);
gestorCursos.adicionarTurma(turma2);
gestorCursos.adicionarTurma(turma3);

// Imprimindo todas as turmas
console.log('\n-------------------------------\n');
gestorCursos.imprimirTurmas();

// Alterando uma turma
gestorCursos.alterarTurma(1, 'Turma de Matemática Avançada', Turno.MANHA, {descricao: 'Curso de Matemática Avançada', area: Area.EXATAS});

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
console.log(`Turma Buscada: ${turmaBuscada?.descricao}`);
