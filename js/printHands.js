export default function printHands(hands, contenido1, contenido2){

    contenido1.innerHTML = ""
    contenido2.innerHTML = ""

    let tabla_extra = document.getElementById("col-segunda")
    let tabla = document.getElementById("col-primera")

    let i = 1
    let twice = false

    hands.forEach(hand => {
        if(i<6){
            if(hand.winner){
                contenido1.innerHTML += `
                <tr>
                    <td colspan="5" class="winner-head">${hand.combo}</td>
                </tr>
                <tr>
                    <td class="${hand.cards[0].color} winner-card">${hand.cards[0].print()}</td>
                    <td class="${hand.cards[1].color} winner-card">${hand.cards[1].print()}</td>
                    <td class="${hand.cards[2].color} winner-card">${hand.cards[2].print()}</td>
                    <td class="${hand.cards[3].color} winner-card">${hand.cards[3].print()}</td>
                    <td class="${hand.cards[4].color} winner-card">${hand.cards[4].print()}</td>
                    
                </tr>
                `
            }
            else{
                contenido1.innerHTML += `
                    <tr>
                        <td colspan="5">${hand.combo}</td>
                    </tr>
                    <tr>
                        <td class="${hand.cards[0].color} td-card">${hand.cards[0].print()}</td>
                        <td class="${hand.cards[1].color} td-card">${hand.cards[1].print()}</td>
                        <td class="${hand.cards[2].color} td-card">${hand.cards[2].print()}</td>
                        <td class="${hand.cards[3].color} td-card">${hand.cards[3].print()}</td>
                        <td class="${hand.cards[4].color} td-card">${hand.cards[4].print()}</td>
                        
                    </tr>
                    `
            }
            contenido1.innerHTML += `
            
            <tr>
                <td colspan="5" class="spacer"></td>
            </tr>
            `
        }
        else if(i <=10){
            twice = true
            if(hand.winner){
                contenido2.innerHTML += `
                <tr>
                    <td colspan="5" class="winner-head">${hand.combo}</td>
                </tr>
                <tr>
                    <td class="${hand.cards[0].color} winner-card">${hand.cards[0].print()}</td>
                    <td class="${hand.cards[1].color} winner-card">${hand.cards[1].print()}</td>
                    <td class="${hand.cards[2].color} winner-card">${hand.cards[2].print()}</td>
                    <td class="${hand.cards[3].color} winner-card">${hand.cards[3].print()}</td>
                    <td class="${hand.cards[4].color} winner-card">${hand.cards[4].print()}</td>
                    
                </tr>
                `
            }
            else{
                contenido2.innerHTML += `
                    <tr>
                        <td colspan="5">${hand.combo}</td>
                    </tr>
                    <tr>
                        <td class="${hand.cards[0].color} td-card">${hand.cards[0].print()}</td>
                        <td class="${hand.cards[1].color} td-card">${hand.cards[1].print()}</td>
                        <td class="${hand.cards[2].color} td-card">${hand.cards[2].print()}</td>
                        <td class="${hand.cards[3].color} td-card">${hand.cards[3].print()}</td>
                        <td class="${hand.cards[4].color} td-card">${hand.cards[4].print()}</td>
                        
                    </tr>
                    `
            }
            contenido2.innerHTML += `
            
            <tr>
                <td colspan="5" class="spacer"></td>
            </tr>
            `
        }
        i++
              
    })
    if(!twice){        
        tabla_extra.style.display = "none"
        
        tabla.style.float = "none"
    }
    else{
        tabla_extra.style.display = "block"
        
        tabla.style.float = "left"
    }
}
//<td>${hand.lvl}</td>