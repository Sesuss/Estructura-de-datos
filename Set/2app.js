var grupo = new Set()
grupo=[
  {Nombre:"Bernardo", Celular:111, Edad:20},
  {Nombre:"Juan", Celular:222, Edad:29},
  {Nombre:"German", Celular:333, Edad:30},
  {Nombre:"Mario", Celular:444, Edad:15},
  {Nombre:"Pablo", Celular:555, Edad:50}
]

function limpiar(){
    document.getElementById("resultado").innerHTML=""
    document.getElementById("lista").innerHTML=""
    document.getElementById("textoabuscar").value=""
  }

function Buscar(){
let tex = document.getElementById("textoabuscar").value
for(let i=0;i<5;i++){
  if(grupo[i].Celular==tex){
  document.getElementById("resultado").innerHTML="Nombre: "+grupo[i].Nombre+"<br>"+ "Celular: "+grupo[i].Celular+"<br>"+"Edad: "+grupo[i].Edad +"<br> <br>"
  }
}
}

function lista(){
    document.getElementById("lista").value=""
    let res=""
    for(let i=0;i<5;i++){
    res= res+ "Nombre: "+grupo[i].Nombre+"<br>"+ "Celular: "+grupo[i].Celular+"<br>"+"Edad: "+grupo[i].Edad +"<br> <br>"
    }
    document.getElementById("lista").innerHTML=res


}