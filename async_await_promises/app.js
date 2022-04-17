// Part 1
async function favNumber(num) {
    let number = await axios.get(`http://numberapi.com/${num}/trivia?json`)
    return number.data.text;
}

async function numsInfo() {
    numsList = await Promise.all([
        axios.get("http://numberapi.com/random/trivia?json"),
        axios.get("http://numberapi.com/random/trivia?json"),
        axios.get("http://numberapi.com/random/trivia?json"),
        axios.get("http://numberapi.com/random/trivia?json")
    ]);
    for(let num of numsList){
        console.log(`${num.data.number}: ${num.data.text}`)
    }
}

let body = document.querySelector("body")
let ul = document.createElement('ul')
body.appendChild(ul)
async function numsInfoPage() {
    numsList = await Promise.all([
        axios.get("http://numberapi.com/random/trivia?json"),
        axios.get("http://numberapi.com/random/trivia?json"),
        axios.get("http://numberapi.com/random/trivia?json"),
        axios.get("http://numberapi.com/random/trivia?json")
    ]);
    for(let num of numsList){
        let li = document.createElement('li');
        li.innerText = `${num.data.number}: ${num.data.text}`
        ul.appendChild(li)
    }
}

numsInfoPage()


// Part 2

async function getCard() {
    let deck = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle")
    let deckId = deck.data.deck_id
    let card = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw`)

    console.log(card.data.cards[0].suit, card.data.cards[0].value)
}

getCard()

const deck = {
    async getDeck() {
        let deck = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle");
        this.deckId = deck.data.deck_id
    },
    async drawCard() {
        let card = await axios.get(`http://deckofcardsapi.com/api/deck/${this.deckId}/draw`)
        console.log(card.data.cards[0].suit, card.data.cards[0].value)
        console.log(card.data.remaining)
    }
}

