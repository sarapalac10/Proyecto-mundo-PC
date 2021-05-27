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
        return`IdMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}"`;
    }
}

let monitor1 = new Monitor('hp', 15);
let monitor2 = new Monitor('samsung',20);

console.log(monitor1.toString());
console.log(monitor2.toString());

