/**
 * Está función devuelve un valor de carta
 * @param {string} carta Ejemplo: C1: 1 A: 10
 * @returns {number} regresa el valor de carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}