// activa tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// activa popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// evento click para mostrar alert de boton #enviarCorreo

$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
});

// doble click para cambiar #titulo1 a rojo

$("#titulo1").on("dblclick", function(){
    $(this).css("color", "red");
});

// un click para volver #titulo1 a negro

$("#titulo1").on("click", function(){
    $(this).css("color", "black");
});

// doble click para cambiar #titulo2 a rojo

$("#titulo2").on("dblclick", function(){
    $(this).css("color", "red");
});

// un click para volver #titulo2 a negro

$("#titulo2").on("click", function(){
    $(this).css("color", "black");
});

// toggle para desaparecer / aparecer contenido de las card

$(".card-title").on("click", function(){
    $(".card-text").toggle("slow");
})