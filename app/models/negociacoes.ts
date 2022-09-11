import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao [] = [];

    adiciona(negociaco: Negociacao) {
        this.negociacoes.push(negociaco);
    }

    lista(): readonly Negociacao [] {
        return this.negociacoes;
    }
}
