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
        return `Computadora: ${this._idComputadora}: ${this._nombre} \n
        ${this._monitor} \n ${this._raton} \n ${this._teclado} `
    }
}