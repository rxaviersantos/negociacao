export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //Método
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
