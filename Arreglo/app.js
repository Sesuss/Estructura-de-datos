class Persona{
    constructor(Nombre,Celular,Edad){
            this.Nombre=Nombre
            this.Celular=Celular
            this.Edad=Edad

    }
    info(){
        return "Nombre: "+this.Nombre+"<br>"+"Celular: "+this.Celular+"<br>"+"Edad: "+this.Edad+"<br>"
    }
}

class Inventario{
    constructor(){
        this.datos=[]
    }
    agreagar(nuevo){
        this.datos.push(nuevo)
    }
    listar(){
        let txtt=""
        for(let i=0; i<this.datos.length; i++){
            txtt=txtt+this.datos[i].info()+"<br>"
        }
        return txtt
    }

    buscar(ID){
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].Celular==ID) {
                return this.datos[i]
            }
        }
        return null
    }
}


let Tienda=new Inventario()

function limpiar(){
    document.getElementById("resultado").innerHTML=""
    document.getElementById("lista").innerHTML=""
    document.getElementById("Borrar").hidden=true
    document.getElementById("textoabuscar").value=""

  }
let per=new Persona ("Bernardo",111,20)
Tienda.agreagar(per)
let per2=new Persona ("Juan",222,29)
Tienda.agreagar(per2)
let per3=new Persona ("German",333,30)
Tienda.agreagar(per3)
let per4=new Persona ("Mario",444,15)
Tienda.agreagar(per4)
let per5=new Persona ("Pablo",555,50)
Tienda.agreagar(per5)


function Buscar(){
    let ID=document.getElementById("textoabuscar").value
    let res=Tienda.buscar(ID)
    if (res==null) {
        document.getElementById("resultado").innerHTML="No se encontro nada"
    }else{
        document.getElementById("resultado").innerHTML="Se encontro <br>"+res.info() 
    }
}
function lista(){
    document.getElementById("lista").value=""
    let res=Tienda.listar()
    document.getElementById("lista").innerHTML=res
    
}