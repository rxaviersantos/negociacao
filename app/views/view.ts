export abstract class View<T> {


    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    //Método
    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;

    }
    //Método abstract
    abstract template(model: T): string;     
}

