let animado = document.querySelectorAll(".animado"); /* Inicio variable . El valor que le doy es para que en todo mi html tome las clases que tiene animado.*/

function mostrarScroll() { /*Detectar cantidad de scroll*/
    let scrollTop= document.documentElement.scrollTop;

    for(var i=0; i<animado.length; i++){ /*Animado.Lenght me permite saber la cantidad de elementos de animado*/
         let alturaAnimado = animado [i].offsetTop; /*OffserTop me ayuda a calcular la distancia que hay entre la ventana hacia los elementos del efecto*/
        if (alturaAnimado+200 <scrollTop) {
            animado[i].style.opacity=1;
            animado[i].classList.add("mostrararriba")
        }
    }
}

window.addEventListener ('scroll' , mostrarScroll);
