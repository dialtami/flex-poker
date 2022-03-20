export default function sort(hand) {
    //Outer pass
    for(let i = 0; i < 5; i++){

        //Inner pass
        for(let j = 0; j < 5 - i - 1; j++){

            //Value comparison using ascending order

            if(hand.cards[j + 1].valor < hand.cards[j].valor){

                //Swapping
                [hand.cards[j + 1].valor,hand.cards[j].valor] = [hand.cards[j].valor,hand.cards[j + 1].valor]
            }
        }
    };
}