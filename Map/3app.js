var grupo =[ {Nombre:"Bernardo", Celular:111, Edad:20},
{Nombre:"Juan", Celular:222, Edad:29},
{Nombre:"German", Celular:333, Edad:30},
{Nombre:"Mario", Celular:444, Edad:15},
{Nombre:"Pablo", Celular:555, Edad:50}]

function limpiar(){
    document.getElementById("resultado").innerHTML=""
    document.getElementById("lista").innerHTML=""
    document.getElementById("textoabuscar").value=""
  }

function Buscar(){
let tex = document.getElementById("textoabuscar").value
let bus =grupo.map(function(grupo){
    if(grupo.Celular==tex){
       return document.getElementById("resultado").innerHTML="Nombre: "+grupo.Nombre+"<br>"+ "Celular: "+grupo.Celular+"<br>"+"Edad: "+grupo.Edad +"<br> <br>"
        }
})
}

function lista(){
    document.getElementById("lista").value=""
    let res=""
    let lista =grupo.map(function(grupo){
        res= res+ "Nombre: "+grupo.Nombre+"<br>"+ "Celular: "+grupo.Celular+"<br>"+"Edad: "+grupo.Edad +"<br> <br>"
    })
    lista=res
    document.getElementById("lista").innerHTML=res
}