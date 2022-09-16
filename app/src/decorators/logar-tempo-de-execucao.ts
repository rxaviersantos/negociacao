export function logarTempoDeExecucao() {
    return function(
        target:any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            //Chamar método original 
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t1-t2)/100} segundos`);
            retorno
        }
        return descriptor;
    }
}