
// Part 1 Numbers

// Gets a single fact about the number seven
const numPromise = axios.get(`http://numbersapi.com/7/trivia?json`);
numPromise
.then(data => console.log(data));

// Used to show the facts of random numbers
const body = document.querySelector('body')
const ul = document.createElement('ul')

const numsPromises = []

for(let i = 1; i < 6; i++) {
    numsPromises.push(axios.get(`http://numbersapi.com/random/trivia?json`))
}

body.appendChild(ul)

Promise.all(numsPromises)
.then(arr => (arr.forEach(p => {
    let li = document.createElement('li')
    li.innerHTML = `<strong style='font-size: 20px;'>${p.data.number}:</strong> ${p.data.text}`
    ul.appendChild(li) 
})))

// Shows several facts of the number seven
body.appendChild(document.createElement("hr"))
ulFavNum = document.createElement('ul')
body.appendChild(ulFavNum)

const promisesArr = []

for(let i = 0; i < 4; i++) {    
    promisesArr.push(axios.get(`http://numbersapi.com/7/trivia?json`))
}

Promise.all(promisesArr)
.then(nums => (nums.forEach(p => {
    let li = document.createElement('li')
    li.innerHTML = `<strong style='font-size: 20px;'>${p.data.number}:</strong> ${p.data.text}`
    ulFavNum.appendChild(li)
})))


// Part 2 Deck of Cards

// const btn = document.createElement('button')
// btn.classList.add("btn")
// body.appendChild(btn)
// const btnGrab = document.querySelector(".btn")

// function pickCard(res) {
//     if(res.data.remaining !== 0) {
//         return axios.get(`http://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw`)
//         .then(res => {
//             console.log(res.data)
//         })
//     }
// }

// btnGrab.addEventListener('click', pickCard)

let deckId = ''
const deckPromise = axios.get("http://deckofcardsapi.com/api/deck/new/")
.then(res => {
    return axios.get(`http://deckofcardsapi.com/api/deck/${res.data.deck_id}/shuffle/`)
})





function pickCard() {

    return new Promise((resolve, reject) => {
        axios.get("http://deckofcardsapi.com/api/deck/new/")
        .then(data => resolve(data.data.deck_id))
        
    });
}