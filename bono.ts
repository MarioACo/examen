class bono{
    public sueldo:number = parseInt((<HTMLInputElement>document.getElementById("sueldo")).value);
    public edad:number = parseInt((<HTMLInputElement>document.getElementById("edad")).value);
    public sexo:string = (<HTMLInputElement>document.getElementById("sexo")).value;
    public nacionalidad:string = (<HTMLInputElement>document.getElementById("nacionalidad")).value;

    public cursos():number{
        let horas:number = 0;
        if((<HTMLInputElement>document.getElementById("php")).checked){
            horas = 20;
            
        }
        if((<HTMLInputElement>document.getElementById("java")).checked){
            horas = 35;
        }
        if((<HTMLInputElement>document.getElementById("asp")).checked){
            horas = 40;
        }
        if((<HTMLInputElement>document.getElementById("vb")).checked){
            horas = 55;
        }
        if((<HTMLInputElement>document.getElementById("bd")).checked){
            horas = 15;
        }
        return horas;
    }
    public costoc():number{
        let costo:number = 0;
        costo = this.cursos() * 3;
        return costo;
    }
    public bono():number{
        let porcentaje:number = 15;
        
        
        
        if(this.sexo == "Femenino"){
            porcentaje = porcentaje + 3;
        }
        if(this.edad > 45){
            porcentaje = porcentaje +2;
        }
        if(this.nacionalidad == "extranjero"){
            porcentaje = porcentaje - 5;
        }
        if((<HTMLInputElement>document.getElementById("1a5a")).checked){
            porcentaje = porcentaje + 5;
        }else if((<HTMLInputElement>document.getElementById("6a10a")).checked){
            porcentaje = porcentaje + 10;
        }else if((<HTMLInputElement>document.getElementById("10a")).checked){
            porcentaje = porcentaje + 15;
        }

        



        return porcentaje;
    }
    public horasc():number{
        let costo:number = 0;
        costo = this.cursos() * 3;
        return costo;
    }

    public bonop():number{
        let bporcentaje:number = 0;
        bporcentaje = this.sueldo / 100;
        bporcentaje = bporcentaje * this.bono();
        return bporcentaje;
    }

    public descuento(){
        let desc:number = 0;
        desc = this.bonop() - this.horasc();
        (<HTMLInputElement>document.getElementById("bono")).value = desc.toString();
    }




}

function calcular(){
    let objeto = new bono();
    if((<HTMLInputElement>document.getElementById("sueldo")).value == ""){
        alert("Debes agregar el sueldo");
        return false;

    }else if((<HTMLInputElement>document.getElementById("edad")).value == ""){
        alert("Debes agregar tu edad");
        return false;
    }else if((<HTMLInputElement>document.getElementById("sexo")).value == ""){
        alert("Debes seleccionar tu sexo");
        return false;
    }

    if((<HTMLInputElement>document.getElementById("1a5a")).checked){
        
    }else if((<HTMLInputElement>document.getElementById("6a10a")).checked){
       
    }else if((<HTMLInputElement>document.getElementById("10a")).checked){
        

    }else{
        alert("Debes de seleccionar tu antiguedad");
        return false;
    }
    
    objeto.descuento();
    
     
    
    
    
    
    
}

function limpiar(){
    (<HTMLInputElement>document.getElementById("sueldo")).value = "";
    (<HTMLInputElement>document.getElementById("edad")).value = "";
    (<HTMLInputElement>document.getElementById("sexo")).defaultValue;
    (<HTMLInputElement>document.getElementById("sueldo")).defaultValue;
}
