let precoGasolina = 5.64;
let precoEtanol = 4.42;

let kmPorLitroGasolina = 15.3;
let kmPorLitroEtanol = 9.6;

let kmViajado = 500;

let gasolina = ("Com GASOLINA você gastará R$ " + ((kmViajado/kmPorLitroGasolina)*precoGasolina).toFixed(2));
let etanol = ("Com ETANOL você gastará R$ " + ((kmViajado/kmPorLitroEtanol)*precoEtanol).toFixed(2));

console.log(gasolina);
console.log(etanol);