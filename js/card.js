export default class card{
    constructor(valor, pinta, color, true_valor) {
        this.valor = valor;
        this.pinta = pinta;
        this.color = color;
        this.true_valor = true_valor;
    }

    print(){
        return this.true_valor + this.pinta;
    }
}
