import createMazo from "./mazo.js";
import mano from "./mano.js";
import decideWin from "./decideWin.js";
import printHands from "./printHands.js";
import checkHand from "./checkHand.js";

function startGame(num_players){
    let mazo = createMazo()
    let contenido1 = document.getElementById("manos-tabla")
    let contenido2 = document.getElementById("manos-tabla2")
    let manos = []

    for(let i = 0; i<num_players;i++){
        manos.push(new mano(mazo[5*i], mazo[5*i+1], mazo[5*i+2], mazo[5*i+3], mazo[5*i+4]))
    }


    let i = 0
    manos.forEach(hand => {  
        let items = checkHand(hand)
        hand.lvl = items[0]
        hand.max = items[1]
        hand.combo = items[2]
        
    })
    

    var uptext = document.getElementById("upText")
    
    var winner = decideWin(manos)

    uptext.innerHTML = `El ganador es la mano ${winner}`
    
    manos[winner-1].winner = true

    printHands(manos, contenido1, contenido2)

    
    
}


const gen_game_button = document.getElementById("generate-game-button")


gen_game_button.addEventListener("click", () => {
    let num_players = document.getElementById("numPlayers").value
	startGame(num_players)
});
