class Teclado extends DispositivoEntrada{

    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado () {
        return this._idTeclado;
    }

    toString(){
    return `idTeclado: [idTeclado: ${this._idTeclado}, this.tipoEntrada ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let teclado1 = new Teclado('usb','logitech');
console.log(teclado1.toString());

let teclado2 = new Teclado('bluetooth','mac');
console.log(teclado2.toString());
