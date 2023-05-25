////////33.3.10-Exercise as Async-Await

/////Part I: problem #1

let favNum = 42;

let numFact = {
    async init() {
        let fact = await axios.get(`http://numbersapi.com/${favNum}/math?json`)
        console.log(fact)
    }
}


///////Part I: Problem #2



async function getFacts(number) {
    let fact = await axios.get(`http://numbersapi.com/${number}/math?json`)
    console.log(fact)
    for (let i = 1; i < 4; i++) {
        newLi = document.createElement("li");
        newLi.innerText = fact.data[i];
        $('div').append(newLi);
        console.log(fact.data[i])
    }


}

////??? Why doesn't the above function have to have a loop in order to go thorugh the array?????

async function getFavNum(favNum) {
    for (let i = 1; i < 4; i++) {
        let favoriteFact = await axios.get(`http://numbersapi.com/${favNum}/math?json`)
        console.log(favoriteFact)
        newLi = document.createElement("li");
        newLi.innerText = favoriteFact.data.text;
        $('div').append(newLi);
    }
}


/// The above worked only after I called the console.log of "favoriteFacts". Why is that????? Why do you basically have to call the promise again befor egeting it to show up.


// let oneCard = {
// async init() {
// let deck_id = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
// deckIdCurrent = deck_id.data.deck_id;
// console.log(deck_id.data.deck_id)
// console.log(deck_id)
// return deckIdCurrent;
// },
// async drawCard() {
// let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deckIdCurrent}/draw/?count=1`)
// console.log(draw)
// console.log(draw.data.cards[0].value + " of " + draw.data.cards[0].suit)
// console.log(deckIdCurrent)
// return draw;
// 
// }
// }
// oneCard.init();
// let $btn = $('button')
// $btn.on('click', function () {
// console.log("testing")
// 
// });
// oneCard.init()

// async function trial() {
// let $cardArea = $('#card-area');
// let baseURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
// let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
// function test() {
// console.log("Testing")
// }
// }
// trial();
$(function () {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    async function setup() {
        let $btn = $('button');
        let $cardArea = $('#card-area');

        let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
        $btn.show().on('click', async function () {
            let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
            let cardSrc = cardData.cards[0].image;
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            $cardArea.append(
                $('<img>', {
                    src: cardSrc,
                    css: {
                        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                    }
                })
            );
            if (cardData.remaining === 0) $btn.remove();
        });
    }
    setup();
});