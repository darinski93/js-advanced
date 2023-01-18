function playingCards(card, suit) {


    let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    let validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    for (let i = 0; i < validCards.length; i++) {

        if (!validCards.includes(card) &&  !validSuits.hasOwnProperty(suit)) {
            throw new Error()

        }

        for (let suitEl in validSuits) {

            if (card === validCards[i] && suit === suitEl) {
                return (`${validCards[i]}${validSuits[suitEl]}`)
            }
        }

    }



}
playingCards('A', 'S')