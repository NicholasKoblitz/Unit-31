
// Part 1 Numbers

// Gets a single fact about the number seven
const numPromise = axios.get(`http://numbersapi.com/7/trivia?json`);
numPromise
.then(data => console.log(data));

const numsPromises = []

for(let i = 1; i < 6; i++) {
    numsPromises.push(axios.get(`http://numbersapi.com/random/trivia?json`))
}

Promise.all(numsPromises)
.then(arr => (arr.forEach(p => {
    console.log(`${p.data.number} --- ${p.data.text}`)
})))

const promisesArr = []

for(let i = 0; i < 4; i++) {    
    promisesArr.push(axios.get(`http://numbersapi.com/7/trivia?json`))
}

Promise.all(promisesArr)
.then(nums => (nums.forEach(p => {
    console.log(`${p.data.number} --- ${p.data.text}`)
})))


// Part 2 Deck of Cards



axios.get("http://deckofcardsapi.com/api/deck/new/draw")
.then(res => {
    console.log(res.data.cards[0].suit, res.data.cards[0].value)
})


let firstCard = null

axios.get("http://deckofcardsapi.com/api/deck/new/draw")
.then(res => {
    let deckId = res.data.deck_id
    firstCard = `${res.data.cards[0].suit} -- ${res.data.cards[0].value}`
    return axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw`)
})
.then(res => {
    let secondCard = `${res.data.cards[0].suit} -- ${res.data.cards[0].value}`
    console.log(firstCard, secondCard)

})

let deckId = null;
body = document.querySelector("body");
btn = document.createElement("button");
btn.innerText = 'Pick Card'
cardArea = document.createElement('div')
cardArea.hidden = true;
btn.classList.add("btn")
body.appendChild(btn);
body.appendChild(cardArea)


const deck = axios.get("http://deckofcardsapi.com/api/deck/new/shuffle")
.then(res => {
    deckId = res.data.deck_id;
    console.log(deckId);
});

btn.addEventListener("click", function() {
    axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw`)
    .then(res => {
        if(res.data.remaining != 0) {
        let card = res.data.cards[0].image
        let img = document.createElement("img")
        img.classList = "card"
        img.src = `${card}`
        body.appendChild(img)
        }
        else {
            cardArea.innerText = 'No more cards'
            cardArea.hidden = false
        }
    })
})