export const esPalindromo = (frase: string): boolean => {
    // Eliminar caracteres no alfabéticos y convertir a minúsculas
    const fraseLimpia = frase.replace(/[^a-zA-Z]/g, "").toLowerCase();
    
    // Obtener la cadena invertida
    const fraseInvertida = fraseLimpia.split("").reverse().join("");
    
    // Comparar la cadena limpia con su reverso
    return fraseLimpia === fraseInvertida;
}
