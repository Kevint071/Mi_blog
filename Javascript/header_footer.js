document.getElementById("header").innerHTML = `
<nav>
    <a href="/Mi_blog.github.io/index.html"><img class = "imagen_logo" src="/Mi_blog.github.io/Imagenes/Logo_pagina.PNG"></a>
    <ul class = "menu">
        <div class="principal">
            <li class = "boton_inicio"><a href = "/Mi_blog.github.io/index.html">Inicio</a></li>
        </div>
        
        <div class="desplegable">

            <li class = "boton_content"><a>Contenido</a></li>
            <div class = "triangulo"></div>

            <ul class="show_content">
                <li><a href="/Mi_blog.github.io/Contenido/Python/Python.html">Python</a></li>
                <li><a href="">Javascript</a></li>
                <li><a href="">Html</a></li>
                <li><a href="">CSS</a></li>
                <li><a href="">Docker</a></li>
            </ul>
            
        </div>

        <div class = "portafolio">
            <li class = "boton_programas"><a href = "/Mi_blog.github.io/Portafolio/Portafolio.html">Portafolio</a></li>
        </div>
    </ul>
</nav>`;

document.getElementById("footer").innerHTML = `
<div class="responsive">
    <form>
        <input class="correo" type="name" placeholder="Nombre">
        <input class="contraseña" type="email" placeholder="Email">
        <button type="submit">Suscribirse</button>
    </form>
    <hr>
    <div class = "creditos">
        <p class = "p_footer">© Kevin Torrecilla Martínez - 2022</p>
        <p class = "p_footer">Grado 11°</p>
    </div>
</div>`





