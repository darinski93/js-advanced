function deckOfCards(arr) {

    let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    let validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    let buff = []

    for (let i = 0; i < arr.length; i++) {
        let splitter = arr[i].split(', ').join('').split('')

        let suit = splitter.pop()
        let card = splitter.join('')

        if (!validCards.includes(card) || !validSuits.hasOwnProperty(suit)) {
            console.log(`Invalid card: ${card}${suit}`)
            return

        } else {
           buff.push(`${card}${validSuits[suit]}`)

        }
    }
    console.log(buff.join(' '))
}
deckOfCards(['5S', '3D', 'QD', '1C'])