

///////33.3.4///

// Coded along, but this code below did not Work, looked it up in chatGPT and it didn't seem to work.

// const element = document.getElementById("#header");
// 
// function changeColor(element, holding) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// element.style.color = "red"
// resolve()
// }, 1000)
// })
// };
// 
// changeColor(element, "red")
// .then(() => changeColor(h1, 'orange'))
// .then(() => changeColor(h1, 'yellow'))
// .then(() => changeColor(h1, 'green'))
// .then(() => changeColor(h1, 'blue'))
// .then(() => changeColor(h1, 'indigo'))
// .then(() => changeColor(h1, 'red'))
// .then(() => changeColor(h1, 'pink'))


///////////////33.3.5-Async Methods/////////

const deck = {
    async init() {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/')
        console.log(res)
    }
}

/////////////////////When calling the variable above inside the console of a browser for testing, you must call by the following:
// deck.init()//////////////////////

async function getStarwars() {
    console.log("start")
    await axios.get("https://swapi.dev/api/")
    console.log("ending")
}

const deck2 = {
    async init() {
        let deck_id = await axios.get('https://deckofcardsapi.com/api/deck/new/')
        this.deckId = (deck_id.data.deck_id)
    },
    //////////////////////When checking in the console for the above variable to work, you have to call in this order:
    /////deck2.init()
    // It returns a Promise, then you have to call the next line to get the actual object you want.
    /////deck2
    // This returns an object of the data you are looking for to retrieve the data desired.
    async shuffle() {
        let deck_id = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
        console.log(deck_id)
    },
    ////////Now with a second function inside the variable object, you can call in this order:
    /////deck2.init()
    /////deck.shuffle()
    ///     This will return the deck id from init() and give it to shuffle function nd then the deck is shuffled.
    async draw() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
        console.log(res.data)
    }

    //////Now the order is:
    //      deck2.init()
    //This returned the promise.
    //      deck2.draw()
    //This returned a card because the promise was already there.
    //      deck2.draw()
    /////////Once you initialize the promise in line 1 (desk2.init() , then you can continue to call deck2.draw() until all 52 cards are drawn from the deck without re-initializing the deck )


}



////////////////////////////////////////////////////////////////////////////33.3.6///////////////////////////////////////////////////////////////////////////


class Pokemon {
    constructor(id) {
        this.id = id;
        this.types = [];
    }
    async getInfo() {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        this.name = res.data.types;
        for (let type of res.data.types) {
            this.types.push(type.type.name)
        }
    }
}


//////////////////////////////////////////////////////////////////////////33.3.7//////////////////////////////////////////////////////////////////////////////

console.frog(42)
///obviously this is wrong. but we want to see the error

try {
    console.frog(42)
}
catch {
    console.log("I caught you")
}

//another example:

async function getUser(user) {
    try {
        let url = `https://api.github.com/users/${user}`;
        let response = await axios.get(url);
        console.log(`${response.data.name}: ${response.data.bio}`);
    } catch (e) {
        console.log("User does not exist!");
    }
}

getUser('colt')