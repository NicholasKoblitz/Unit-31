//? Code given to complete practice

/** Textual markov chain generator */


class MarkovMachine {

    /** build markov machine; read in text.*/
  
    constructor(text) {
      let words = text.split(/[ \r\n]+/);
      this.words = words.filter(c => c !== "");
      this.makeChains();
    }
  
    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
  
    makeChains() {
        const chain = {};
        for(let word of this.words) {
            chain[word] = [];
        }
        for(let i = 0; i < this.words.length; i++){
            if(chain[this.words[i]]){
                if(i === this.words.length - 1){
                    chain[this.words[i]].push(null);
                }
                else {
                    chain[this.words[i]].push(this.words[i + 1]);
                }
            }
        }
        return chain;
    }
  
  
    /** return random text from chains */
  
    makeText(numWords = 100) {
        const chain = this.makeChains();
        const chainKeys = Object.keys(chain);
        const len = chainKeys.length;
        const randInt = Math.floor(Math.random * len)

        for(let i = 1; i < numWords + 1; i++) {
            
        }
    }
  }

//?----------------------------------------------------------

module.exports = {
    MarkovMachine
}