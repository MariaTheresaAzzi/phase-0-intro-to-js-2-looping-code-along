// Code your solutions in this file
// const cards = ["Guadalupe", "Ollie", "Aki"];
// console.log(cards);
// writeCards(["Charlie", "Samip", "Ali"], "birthday");

function writeCards(cards, event) {
    let arr = [];
    for (let i = 0; i < cards.length; i++) {
        let newCards;
        newCards = `Thank you, ${cards[i]}, for the wonderful ${event} gift!`;
        arr.push(newCards);
    }
    // console.log(arr.length, "birthday");
    return arr;
}
// console.log(writeCards(cards, "birthday"));
function countDown(number) {
    for (; number >= 0; number--) {
        console.log(number);
    }
}
countDown(10);