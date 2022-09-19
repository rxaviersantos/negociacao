
export abstract class View<T> {


    protected elemento: HTMLElement;
   

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor)
        if (elemento) {
            this.elemento = elemento as HTMLElement;

        } else {
            throw Error('Selector $(seletor) não existe no DOMException. Verifique.');
        }
       
    }

    //Método
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;

    }
    //Método abstract
    protected abstract template(model: T): string;     
}

