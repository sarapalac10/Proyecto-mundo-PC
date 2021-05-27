class DispositivoEntrada{
    
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
}

dispositivoEntrada1 = new DispositivoEntrada('auricular','lg');

console.log(dispositivoEntrada1);


//Dispositivo Ratón

class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Ratón: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let raton1 = new Raton('usb', 'hp');
console.log(raton1.toString());

let raton2 = new Raton('bluetooth','dell');
console.log(raton2.toString());

raton2.marca = 'hp';

console.log(raton2.toString());

//Dispositivo Teclado

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
    return `Teclado: [idTeclado: ${this._idTeclado}, this.tipoEntrada ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let teclado1 = new Teclado('usb','logitech');
console.log(teclado1.toString());

let teclado2 = new Teclado('bluetooth','mac');
console.log(teclado2.toString());





