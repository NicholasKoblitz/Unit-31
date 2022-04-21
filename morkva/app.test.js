const {MarkovMachine} = require('./app');


describe("Markov Machine should be a class", () => {
    const newMarkov = new MarkovMachine("TEST TEST");

    test("Return a class", () => {
        expect(newMarkov).toBeInstanceOf(MarkovMachine);
    })
      
})

describe("markavMachine.makeChains", () => {
    const newMarkov = new MarkovMachine("TEST THIS TASS TEST ME");

    test('Should return an object', () => {
        expect(typeof newMarkov.makeChains()).toBe('object')
    })
    test('Return object should have to properites', () => {
        expect(newMarkov.makeChains()).toEqual({'ME': [null], 'TASS': ['TEST'],'TEST': ['THIS', 'ME'], 'THIS': ['TASS']})
    })
})

describe("markovMachine.makeText", () => {
    const newMarkov = new MarkovMachine("TEST THIS TASS TEST ME");
    test("should return  a string", () => {
        expect(typeof newMarkov.makeText()).toBe("String")
    })
})
    
