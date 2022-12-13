/**
 * Está función te dará uana carta
 * @param {Array<string>} deck ['C1','D2','H3','S4'];
 * @returns {string} regresa última carta del deck
 */


export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    return carta;
}