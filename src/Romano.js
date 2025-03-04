function convertirUnidades(n) {
    const unidades = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return unidades[n];
}

function convertirDecenas(n) {
    const decenas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    return decenas[n];
}

function convertirCentenas(n) {
    const centenas = ["", "C", "CC", "CCC", "CD", "D"];
    return centenas[n];
}

function Romano(a) {
    if (a < 1 || a > 500) return "Número fuera de rango";

    let cent = Math.floor(a / 100);
    let dec = Math.floor((a % 100) / 10);
    let uni = a % 10;

    return (convertirCentenas(cent) + convertirDecenas(dec) + convertirUnidades(uni)).toLowerCase();
}

export default Romano;


  