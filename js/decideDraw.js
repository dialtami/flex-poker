export default function decideDraw(final_hands, maxPos) {

    var max = -1
    var winner = 1;
    var nivel = final_hands[0].lvl
    var i = 0

    console.log(final_hands)
    console.log(maxPos)

    final_hands.forEach(hand => {
        if(hand.max > max){
            max = hand.max
            winner = maxPos[i]
        }
        i++;
    })
    
    
    return winner


    //Empate en Poker

}