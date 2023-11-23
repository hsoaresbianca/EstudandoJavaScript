class Carro {
    marca;
    cor;
    gastoMedioKm;
        
    constructor(marca, cor, gastoMedioKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm= gastoMedioKm;
    }

    calcularGastoViagem(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat','branco', 1/12);
const onix = new Carro('Chevrolet', 'preto', 1/10);

console.log(uno.calcularGastoViagem(70,5));
console.log(onix.calcularGastoViagem(70,5));