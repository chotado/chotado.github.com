//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrelos
links.forEach(function(link){

    //Agregar un evento click a cada de ellos - case sensitive
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        //Quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agergar clases para animar su salida fadeOutUp
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUp");

        setTimeout(function(){
            location.href = "/boletines";
        },600);
        

        return false;

    });
});
