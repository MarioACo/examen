var bono = /** @class */ (function () {
    function bono() {
        this.sueldo = parseInt(document.getElementById("sueldo").value);
        this.edad = parseInt(document.getElementById("edad").value);
        this.sexo = document.getElementById("sexo").value;
        this.nacionalidad = document.getElementById("nacionalidad").value;
    }
    bono.prototype.cursos = function () {
        var horas = 0;
        if (document.getElementById("php").checked) {
            horas = 20;
        }
        if (document.getElementById("java").checked) {
            horas = 35;
        }
        if (document.getElementById("asp").checked) {
            horas = 40;
        }
        if (document.getElementById("vb").checked) {
            horas = 55;
        }
        if (document.getElementById("bd").checked) {
            horas = 15;
        }
        return horas;
    };
    bono.prototype.costoc = function () {
        var costo = 0;
        costo = this.cursos() * 3;
        return costo;
    };
    bono.prototype.bono = function () {
        var porcentaje = 15;
        if (this.sexo == "Femenino") {
            porcentaje = porcentaje + 3;
        }
        if (this.edad > 45) {
            porcentaje = porcentaje + 2;
        }
        if (this.nacionalidad == "extranjero") {
            porcentaje = porcentaje - 5;
        }
        if (document.getElementById("1a5a").checked) {
            porcentaje = porcentaje + 5;
        }
        else if (document.getElementById("6a10a").checked) {
            porcentaje = porcentaje + 10;
        }
        else if (document.getElementById("10a").checked) {
            porcentaje = porcentaje + 15;
        }
        return porcentaje;
    };
    bono.prototype.horasc = function () {
        var costo = 0;
        costo = this.cursos() * 3;
        return costo;
    };
    bono.prototype.bonop = function () {
        var bporcentaje = 0;
        bporcentaje = this.sueldo / 100;
        bporcentaje = bporcentaje * this.bono();
        return bporcentaje;
    };
    bono.prototype.descuento = function () {
        var desc = 0;
        desc = this.bonop() + this.horasc();
        document.getElementById("bono").value = desc.toString();
    };
    return bono;
}());
function calcular() {
    var objeto = new bono();
    if (document.getElementById("sueldo").value == "") {
        alert("Debes agregar el sueldo");
        return false;
    }
    else if (document.getElementById("edad").value == "") {
        alert("Debes agregar tu edad");
        return false;
    }
    else if (document.getElementById("sexo").value == "") {
        alert("Debes seleccionar tu sexo");
        return false;
    }
    if (document.getElementById("1a5a").checked) {
    }
    else if (document.getElementById("6a10a").checked) {
    }
    else if (document.getElementById("10a").checked) {
    }
    else {
        alert("Debes de seleccionar tu antiguedad");
        return false;
    }
    objeto.descuento();
}
function limpiar() {
    document.getElementById("sueldo").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("sexo").defaultValue;
    document.getElementById("sueldo").defaultValue;
}
