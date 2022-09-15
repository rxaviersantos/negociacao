import { View } from "./view.js";

export class MensagemView extends View<string> {
  
    //Método
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        
        `
    }
}
