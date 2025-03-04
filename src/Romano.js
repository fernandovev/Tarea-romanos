function numeros1_9(b) {
    const valores = ["", "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"];
    return valores[b];
}

function Romano(a) {
    if (a < 1 || a > 99) return "Número fuera de rango";

    const decenas = ["", "x", "xx", "xxx", "xl", "l", "lx", "lxx", "lxxx", "xc"];

    let unidades = a % 10;
    let dec = Math.floor(a / 10);

    return decenas[dec] + numeros1_9(unidades);
}

export default Romano;

  