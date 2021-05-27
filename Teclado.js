class Teclado extends DispositivoEntrada{

    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get contadorTeclado () {
        return this._idTeclado;
    }

    toString(){
    return `idTeclado: ${this._idTeclado}`;
    }
}

let teclado1 = new Teclado('usb','logitech');
console.log(teclado1.toString());
