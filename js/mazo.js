import card from "./card.js";
import shuffle from "../imported js/shuffle.js";

function createMazo(){
    //let pintas = ["tre","cor","dia","pic"]
    let true_valores = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    let valores = [1,2,3,4,5,6,7,8,9,10,11,12,13]

    let pintas = ["♣", "♦", "♥", "♠"]

    let mazo = []


    pintas.forEach(pinta => {
        valores.forEach(valor => {
            if(pinta == "♣" || pinta == "♠"){
                mazo.push(new card(valor, pinta, "black", true_valores[valor-1]))
            }
            else{
                mazo.push(new card(valor, pinta, "red", true_valores[valor-1]))
            }
        })
    });
    shuffle(mazo)
    /*
    var mano = [new card(10,"tre"), new card(11,"tre"), new card(12,"tre"), new card(13,"tre"), new card(1,"tre")]
    mano.push(new card(7,"dia"), new card(8,"dia"), new card(9,"dia"), new card(10,"dia"), new card(11,"dia"))
    mano.push(new card(7,"dia"), new card(7,"tre"), new card(11,"dia"), new card(7,"pic"), new card(7,"cor"))
    mano.push(new card(10,"cor"), new card(10,"tre"), new card(7,"pic"), new card(7,"cor"), new card(10,"dia"))
    mano.push(new card(2,"cor"), new card(10,"cor"), new card(4,"cor"), new card(7,"cor"), new card(10,"cor"))
    mano.push(new card(1,"cor"), new card(2,"tre"), new card(3,"dia"), new card(4,"pic"), new card(5,"pic"))
    mano.push(new card(1,"cor"), new card(2,"tre"), new card(3,"dia"), new card(4,"pic"), new card(5,"pic"))
    mano.push(new card(1,"tre"), new card(13,"tre"), new card(1,"dia"), new card(6,"cor"), new card(1,"cor"))
    mano.push(new card(2,"tre"), new card(13,"tre"), new card(1,"tre"), new card(6,"cor"), new card(2,"cor"))
    mano.push(new card(2,"tre"), new card(1,"dia"), new card(7,"tre"), new card(6,"cor"), new card(3,"dia"))
    
    mano.forEach(carta => {
        mazo.push(carta)
    })
    */
        
    return mazo
}

export default createMazo;

/* 
MANOS PRE-CREADAS (copiar definición e ingresar en un mazo.push() comentando el ingreso original)

mano.forEach(carta => {
    mazo.push(carta)
})

- - - ESCALERA REAL - - -
var mano = [new card(10,"tre"), new card(11,"tre"), new card(12,"tre"), new card(13,"tre"), new card(1,"tre")] 


- - - ESCALERA DE COLOR - - -
var mano = [new card(7,"dia"), new card(8,"dia"), new card(9,"dia"), new card(10,"dia"), new card(11,"dia")]
    or
var mano = [new card(1,"tre"), new card(2,"tre"), new card(3,"tre"), new card(4,"tre"), new card(5,"tre")]

- - - PÓKER - - -
var mano = [new card(7,"dia"), new card(7,"tre"), new card(7,"pic"), new card(7,"cor"), new card(11,"dia")]
    or
var mano = [new card(2,"cor"), new card(2,"dia"), new card(3,"pic"), new card(2,"pic"), new card(2,"tre")]


- - - FULL HOUSE - - -
var mano = [new card(10,"cor"), new card(10,"tre"), new card(7,"pic"), new card(7,"cor"), new card(10,"dia")]
    or
var mano = [new card(4,"tre"), new card(8,"dia"), new card(4,"pic"), new card(4,"cor"), new card(4,"dia")]


- - - FLUSH - - -
var mano = [new card(2,"cor"), new card(10,"cor"), new card(4,"cor"), new card(7,"cor"), new card(10,"cor")]
    or
var mano = [new card(3,"tre"), new card(1,"tre"), new card(4,"tre"), new card(7,"tre"), new card(12,"tre")]

- - - ESCALERA - - -
var mano = [new card(1,"cor"), new card(2,"tre"), new card(3,"dia"), new card(4,"pic"), new card(5,"pic")]
    or
var mano = [new card(3,"dia"), new card(2,"pic"), new card(4,"tre"), new card(6,"dia"), new card(5,"tre")]

- - - TRIO - - -
var mano = [new card(1,"tre"), new card(13,"tre"), new card(1,"dia"), new card(6,"cor"), new card(1,"cor")]
    or
var mano = [new card(1,"pic"), new card(10,"cor"), new card(5,"cor"), new card(5,"pic"), new card(5,"dia")]

- - - PAR - - -
var mano = [new card(2,"tre"), new card(13,"tre"), new card(1,"tre"), new card(6,"cor"), new card(2,"cor")]
    or
var mano = [new card(13,"pic"), new card(13,"cor"), new card(8,"cor"), new card(5,"pic"), new card(10,"dia")]

- - - NADA - - -
var mano = [new card(2,"tre"), new card(1,"dia"), new card(7,"tre"), new card(6,"cor"), new card(3,"dia")]
    or
var mano = [new card(10,"tre"), new card(13,"dia"), new card(8,"tre"), new card(5,"pic"), new card(9,"cor")]

*/