// clases = document.querySelectorAll(".click")

// clases.forEach(el => {
//     el.addEventListener("click", e => {
//       const id = e.target.getAttribute("id");
//       console.log("Se ha clickeado el id "+id);
//     });
//   });

document.getElementById("apuntes").innerHTML = `<h2 class="titulo_apuntes">Apuntes de python</h2>
    
<ul class="temas_python" type="circle">

    <li id="0" class="click" onclick="items(this)"><a class = "links" href="#">Diccionarios</a>
        <ul id="100" class = "subtemas">
            <li><a href="/Mi_blog/Contenido/Python/Diccionarios/Diccionarios.html">Definición</a></li>
            <li><a href="/Mi_blog/Contenido/Python/Diccionarios/Añadir-elemento-en-un-diccionario.html">Añadir elementos en un diccionario</a></li>
            <li><a href="">Metodo get para diccionarios</a></li>
            <li><a href="">Metodo items</a></li>
            <li><a href="">Metodo keys</a></li>
            <li><a href="">Método values</a></li>
            <li><a href="">Mostrar valor de una key de un diccionario</a></li>
        </ul>
    </li>
    <li id="1" onclick="items(this)"><a class = "links" href="#">Excepciones</a>
        <ul id="101" class = "subtemas">
            <li><a href="">Zero Division Error</a></li>
        </ul>
    </li>
    <li id="2" onclick="items(this)"><a class = "links" href="#">Funciones</a>
        <ul id="102" class = "subtemas">
            <li><a href="">Función anónima Lambda</a></li>
            <li><a href="">Función /b</a></li>
            <li><a href="">Función id</a></li>
            <li><a href="">Función print, sep y end</a></li>
        </ul>
    </li>
    <li><a class = "links" href="">Listas</a></li>
    <li><a class = "links" href="">Módulos</a></li>
    <li><a class = "links" href="">Strings</a></li>
    <li><a class = "links" href="">Unittest</a></li>
</ul>`


for (i=0; i<=2; i++){
    document.getElementsByClassName("subtemas")[i].style.display = "none";
}

let contador = 0;
let ids = [];

function items(elemento) {

    let el_id = elemento.id;
    console.log("id: " + el_id);

    let subtemas = document.getElementsByClassName(`subtemas`)[el_id];

    for (i=0; i<=2; i++){

        subtema_temporal = document.getElementsByClassName("subtemas")[i];
        console.log(subtema_temporal.id - 100);


        if (subtema_temporal.id -100 == el_id){
            
            if (subtemas.style.display == "block"){
                subtemas.style.display = "none";
            }
            else{
                subtemas.style.display = "block";
            }

        } else{
            subtema_temporal.style.display = "none";
        }
    }
    
}
