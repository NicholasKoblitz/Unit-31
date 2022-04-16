
// Part 1 
const numPromise = axios.get(`http://numbersapi.com/7/trivia?json`);
numPromise
.then(data => console.log(data));


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

body.appendChild(document.createElement("hr"))
ulFavNum = document.createElement('ul')
body.appendChild(ul)

const promisesArr = []

for(let i = 0; i < 4; i++) {    
    promisesArr.push(axios.get(`http://numbersapi.com/7/trivia?json`))
}

Promise.race(promisesArr)
.then(nums => (nums.forEach(p => {
    let li = document.createElement('li')

})))
