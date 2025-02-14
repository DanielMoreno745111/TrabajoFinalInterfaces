document.addEventListener("DOMContentLoaded", function() {
    const mostrarregistro = document.querySelector('#registrarse');
    const mostrariniciosesion = document.querySelector('#iniciarSesion');
    const izquierda1 = document.querySelector('#left1');
    const derecha1 = document.querySelector('#right1');
    const izquierda2 = document.querySelector('#left2');
    const derecha2 = document.querySelector('#right2');
    mostrariniciosesion.addEventListener("click", function(){
        izquierda1.classList.add("oculto");
        derecha1.classList.add("oculto");
        izquierda2.classList.remove("oculto");
        derecha2.classList.remove("oculto");
    })

    mostrarregistro.addEventListener("click", function(){
        izquierda2.classList.add("oculto");
        derecha2.classList.add("oculto");
        izquierda1.classList.remove("oculto");
        derecha1.classList.remove("oculto");
    })
})