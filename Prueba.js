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

//Dispositivo monitor

class Monitor {
    static contadorMonitores = 0;
    constructor (marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores ;
    }

    get idMonitor (){
        return this._idMonitor;
    }

    get marca(){
       return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamaño (){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return` Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}"]`;
    }
}


//Computadora

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;  /*Relación de agregación*/
        this._teclado = teclado;
        this._raton = raton;
    }

    toString(){
        return `Computadora: ${this._idComputadora}: ${this._nombre}\n${this._monitor} \n ${this._raton} \n ${this._teclado} `
    }
}

// Orden

class Orden {
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = []; 
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);  
    }

    mostrarOrden(){
        let computadorasOrden = '';
        
        for (let computadora of this._computadoras ) {
            computadorasOrden += `\n${computadora}`;
        }
    
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

//Prueba

dispositivoEntrada1 = new DispositivoEntrada('auricular','lg');

console.log(dispositivoEntrada1);

let raton1 = new Raton('usb', 'hp');
console.log(raton1.toString());

let raton2 = new Raton('bluetooth','dell');
console.log(raton2.toString());

raton2.marca = 'hp';
console.log(raton2.toString());


let teclado1 = new Teclado('usb','logitech');
console.log(teclado1.toString());

let teclado2 = new Teclado('bluetooth','mac');
console.log(teclado2.toString());

let monitor1 = new Monitor('hp', 15);
console.log(monitor1.toString());

let monitor2 = new Monitor('samsung',20);
console.log(monitor2.toString());

let computadora1 = new Computadora('hola putos', monitor1, teclado1, raton1);
console.log(computadora1.toString());
//console.log( `${computadora1}` );


let computadora2 = new Computadora('marcame esta ome', monitor2, teclado1, raton2);
//console.log(`${computadora2}`);
console.log(computadora2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();



