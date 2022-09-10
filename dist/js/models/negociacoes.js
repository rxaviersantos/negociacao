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
}
//const negociacoes = new Negociacoes();
//negociacoes.
