var basicCard = require("./basicCard.js");
var clozeCard = function (text, cloze) {
    if (this instanceof clozeCard){
        this.fullText = text;
        this.cloze = cloze;
        this.partial = function () {
            if (this.fullText.includes(this.cloze)) {
                return this.fullText.replace(this.cloze, '______');
            } else {
                var failedCloze = 'Oops! The full text: "' + this.fulltext + '" does not include: "' + this.cloze + '!';
                return failedCloze;
            }
        };
    }
    else {
        return new ClozeCard(text, cloze)
    }
}
module.exports = clozeCard