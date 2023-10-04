let billedkort = ["hjerter", "spar", "kløver", "diamant"];
let values = ["es", "2", "3", "4", "5", "6", "7", "8", "9", "10", "knægt", "dame", "konge"];

let deck = [];

for (let i = 0; i < billedkort.length; i++) {
  for (let j = 0; j < values.length; j++) {
    let card = {
      billedkort: billedkort[i],
      value: values[j]
    };
    deck.push(card);
    console.log("Added card:", card);
  }
}