export const esPrimo = (numero: number): boolean => {
    if (numero <= 1) {
        return false;
    }
    if (numero <= 3) {
        return true; // 2 y 3 son primos
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false; // Excluye múltiplos de 2 y 3
    }
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}