var clozeCard = require("./clozeCard.js");
var basicCard = require("./basicCard.js");
var firstPresident = new basicCard(
    "Who was the first president of the United States?","George Washington");

// console.log(firstPresident.front); 

// console.log(firstPresident.back); 


var firstPresidentCloze = new clozeCard(
    "George Washington was the first president of the United States.", "George Washington");
    

