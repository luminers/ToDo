const $nombre = document.getElementById("nombreTarea"),
$descripcion=document.getElementById("descripcionTarea"),
$listaPendiente=document.querySelector(".pendiente"),
$listaEnProceso=document.querySelector(".en-proceso"),
$listaFinalizada=document.querySelector(".finalilzada"),
$fragmento=document.createDocumentFragment(),
$btnAgregar=document.getElementById("agregar"),
$radioButtons=document.querySelectorAll(`input[type="radio"]`);



$btnAgregar.addEventListener("click",  () =>{
    let estado;
    for (const radioButton of $radioButtons) {
     if (radioButton.checked) {
         estado = radioButton.id;
          break;
      }
     }

    let tarea= crearTarea($nombre.value,$descripcion.value,estado);
     //$fragmento.appendChild(tarea);

     switch (estado) {
        case "pendiente":
            $listaPendiente.innerHTML+=tarea;
            break;
        case "enProgreso":
             $listaPendiente.innerHTML+=tarea;
             break;
        case "finalizada":
             $listaPendiente.innerHTML+=tarea;
             break;
     
         default:
             break;
     }


});

    



function crearTarea(nombre, descripcion, estado) {
    return `<div  id="tarea" class="tarea${estado}">
        <h3 class="nombre-tarea">${nombre}</h3>
        <p class="descripcion-tarea">${descripcion}</p>
    </div>`;
}


