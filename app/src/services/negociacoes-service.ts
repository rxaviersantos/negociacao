import { NegociacaoController } from "../controllers/negociacao-controller";
import { NegociacoesDodia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";


export class NegociacoesService {

    public obterNegociacoes(): Promise<Negociacao[]> {
       return  fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados: NegociacoesDodia[]) => {
            return dados.map(dadoDehoje => {
                return new Negociacao (
                    new Date(), 
                    dadoDehoje.vezes, 
                    dadoDehoje.montante
                )

            })
        })


    }
}