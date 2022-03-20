import card from "./card.js";


//Retorna una tupla (Nivel de mano, Carta máxima), siendo la segunda el valor que dictaría en un empate
export default function checkHand(mano) {

    mano.sortt()

    let cards = mano.cards

    //Mapear valores
    const mapa_v = new Map()
    mano.cards.forEach(carta => {
        if(mapa_v.has(carta.valor)){
            mapa_v.set(carta.valor, mapa_v.get(carta.valor)+1)
        }
        else{
            mapa_v.set(carta.valor,1)
        }
    });

    //Mapear pintas
    const mapa_p = new Map()
    mano.cards.forEach(carta => {
        if(mapa_p.has(carta.pinta)){
            mapa_p.set(carta.pinta, mapa_p.get(carta.pinta)+1)
        }
        else{
            mapa_p.set(carta.pinta,1)
        }
    });


    // console.log(mapa_v)
    // console.log(mapa_p)
    // console.log(cards)



    //Escalera Real
    if(cards[0].print() == "1tre" && cards[1].print() == "10tre" && cards[2].print() == "11tre" && cards[3].print() == "12tre" && cards[4].print() == "13tre"){
        console.log("Escalera Real, Máximo: "+13)
        return [10, 13, "Escalera Real"]
    }

    //Escalera color
    for (const [carta, cant] of mapa_p) {       
        if(cant==5){
            let escalera = true
            var flush = true
            //Revisar si el máximo - mínimo es 4 (si no lo es, entonces no puede ser escalera de color)
            if(cards[4].valor-cards[0].valor==4){
                //Checkear si hay alguna repetición, si hay, entonces no es una escalera (Ej 7,7,9,10,J)
                for (const [cart, can] of mapa_v) {
                    if(can>1){
                        escalera = false
                        break
                    }
                }
                //Si es que no hay repetición, es escalera color
                if(escalera){
                    console.log("Escalera Color, Máximo: "+cards[4].valor)
                    return [9, cards[4].valor, "Escalera color"]
                }
            }
            //Si no se da, entonces nos aseguramos que es un Flush, pero hay que verificar otros casos                     
        }
      }
     
    //Poker
    var card1 = false
    var card4 = false
    for (const [carta, cant] of mapa_v) {
     
        if(cant==4){
            card4 = carta
        }
        else{
            card1 = carta
        }
    }
    if(card4 != false){
        console.log("Póker, Máximo: "+card1)
        return [8, card1, "Poker"]
    }

    //Full House
    var par = false
    var trio = false
    var card3 = false
    for (const [carta, cant] of mapa_v) {
        if(cant==3){
            card3 = carta
            trio = true
        }
        if(cant==2){
            par = true
        }
    }
    if(par == true && trio == true){
        console.log("Full House, Máximo: "+card3)
        return [7, card3, "Full House"]            //REVISAR: Puede chekear el par antes que el trio
    }

    //Flush
    if(flush){
        console.log("Flush (Color), Máximo: "+cards[4].valor)
        return [6, cards[4].valor, "Flush (Color)"]
    }

    //Escalera
    if(cards[4].valor-cards[0].valor==4){
        let escalera = true
        for (const [carta, cant] of mapa_v) {
            if (cant>1){
                escalera = false
                break
            }
                
        }
        if(escalera){
            console.log("Escalera, Máximo: "+cards[4].valor)
            return [5, cards[4].valor, "Escalera"]
        }
    }

    //Trio
    if(trio){
        console.log("Trio, Máximo: "+card3)
        return [4, card3, "Trio"]
    }

    //Doble par
    let pares = 0
    let par_max = -1
    var card2 = -1
    for (const [carta, cant] of mapa_v) {
        if (cant == 2){
            pares++;
            if(card2 < carta){
                card2 = carta
            }
        }
    }
    if(pares==2){
        console.log("Doble Par, Máximo: "+card2)
        return [3, card2, "Doble par"]
    }

    //Par
    if(pares == 1){
        console.log("Par, Máximo: "+card2)
        return [2, card2, "Par"]
    }

    console.log("Nada, Máximo: "+cards[4].valor)
    return [1, cards[4].valor, "Nada"]  
  }