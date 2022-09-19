export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociaco) {
        this.negociacoes.push(negociaco);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    ehIgual(negociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map