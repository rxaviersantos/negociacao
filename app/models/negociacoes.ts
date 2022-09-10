import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociaco: Negociacao) {
        this.negociacoes.push(negociaco);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}

//const negociacoes = new Negociacoes();
//negociacoes.
