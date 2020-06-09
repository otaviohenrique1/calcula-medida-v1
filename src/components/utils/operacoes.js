export function calculaMedida(a, b, c) {
    return (parseFloat(a) * parseFloat(b)) / parseFloat(c);
}

export function geraCodigo() {
    let codigoProduto = '';
    for (let i = 0; i < 10; i++) {
        codigoProduto = codigoProduto.concat('' + Math.floor((Math.random() * 10)));
    }
    return codigoProduto;
}