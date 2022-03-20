import decideDraw from "./decideDraw.js"

export default function decideWin(hands){
    
    const candidates = new Map()
    var max = -1
    var maxPos = []
    var i = 1

    hands.forEach(hand => {
        if(candidates.has(hand.lvl)){
            candidates.get(hand.lvl).push(hand)
        }
        else{
            candidates.set(hand.lvl,[hand])
        }
        
        if(hand.lvl > max){
            max = hand.lvl
            maxPos = [i]
        }
        else if(hand.lvl == max){
            maxPos.push(i)
        }
        i++;
    })

    console.log(candidates)
    var final_hands = candidates.get(max)
    
    if(final_hands.length == 1){
        final_hands[0].winner = true
        return maxPos
    }

    return decideDraw(final_hands, maxPos)

}