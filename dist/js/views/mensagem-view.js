import { View } from "./view.js";
export class MensagemView extends View {
    //Método
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        
        `;
    }
}
