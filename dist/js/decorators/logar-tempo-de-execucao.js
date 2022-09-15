export function logarTempoDeExecucao() {
    return function (target, propertykey, descriptor) {
        return descriptor;
    };
}
