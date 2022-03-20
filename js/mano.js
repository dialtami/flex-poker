import card from "./card.js";
import sort from "../imported js/handSort.js";
import checkHand from "./checkHand.js";

export default class mano{
    constructor(v1, v2, v3, v4, v5) {
        this.cards = []
        this.cards[0] = v1
        this.cards[1] = v2
        this.cards[2] = v3
        this.cards[3] = v4
        this.cards[4] = v5
        this.max = 0
        this.lvl = 0
        this.combo = ""
        this.winner = false
    }

    //Bubble sort, conseguido desde https://www.section.io/engineering-education/sorting-algorithms-in-js/
    sortt(){
        sort(this)
    }

    checkHand(){
        return checkHand()
    }
};