import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao [] = [];

    public adiciona(negociaco: Negociacao) {
        this.negociacoes.push(negociaco);
    }

    public lista(): readonly Negociacao [] {
        return this.negociacoes;
    }
}
