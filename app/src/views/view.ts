import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {


    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor)
        if (elemento) {
            this.elemento = elemento as HTMLElement;

        } else {
            throw Error('Selector $(seletor) não existe no DOMException. Verifique.');
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    //Método
    @logarTempoDeExecucao()
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;

    }
    //Método abstract
    protected abstract template(model: T): string;     
}

