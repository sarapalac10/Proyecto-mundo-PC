class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get contadorRatones(){
        return this._idRaton;
    }

    toString(){
        return `idRaton: ${this._idRaton}`;
    }
}

let raton1 = new Raton('holi');
console.log(raton1.toString());

