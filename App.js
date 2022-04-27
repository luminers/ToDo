const $nombre = document.getElementById("nombreTarea"),
    $descripcion = document.getElementById("descripcionTarea"),
    $listaPendiente = document.querySelector(".pendiente"),
    $listaEnProceso = document.querySelector(".en-proceso"),
    $listaFinalizada = document.querySelector(".finalizada"),
    $fragmento = document.createDocumentFragment(),
    $btnAgregar = document.getElementById("agregar"),
    $radioButtons = document.querySelectorAll(`input[type="radio"]`);

let pendiente = [],
    enProceso = [],
    finalizada = [];

//localStorage.clear();

window.onload = cargarTareas;

function cargarTareas() {
    //Selecciono el array con los items de cada estado
    let pendientes = JSON.parse(localStorage.getItem("pendiente"));
    if (pendientes!=null) $listaPendiente.innerHTML += pendientes.join(' ');  //join() para eliminar las comas
    let enProceso = JSON.parse(localStorage.getItem("enProceso"));
    if (enProceso!=null) $listaEnProceso.innerHTML += enProceso.join(' '); //join() para eliminar las comas
    let finalizadas = JSON.parse(localStorage.getItem("finalizada"));
    if (finalizadas!=null)$listaFinalizada.innerHTML += finalizadas.join(' '); //join() para eliminar las comas
}




$btnAgregar.addEventListener("click", () => {
    let estado;
    //Verifico el estado a partir de los radio buttons (.cheked)
    for (const radioButton of $radioButtons) {
        if (radioButton.checked) {
            estado = radioButton.id;
            break;
        }
    }

    //Creo el html de la tarea con el valor de los inputs
    let tarea = crearTarea($nombre.value, $descripcion.value, estado);
    //$fragmento.appendChild(tarea);

    //Escribe y guarda en el localstorage las tareas dependiendo del estado
    switch (estado) {
        case "pendiente":
            pendiente.push(tarea);
            let anterior = JSON.parse(localStorage.getItem('pendiente'));
            //Agraga las tareas anteriores si es que existen
            if (anterior != null) {
                pendiente.push(anterior.join(' '));
                localStorage.setItem('pendiente', JSON.stringify(pendiente))
            } else {
                localStorage.setItem('pendiente', JSON.stringify(pendiente))
            }
            //imprime las tareas
            $listaPendiente.innerHTML += tarea;
            break;
        case "enProceso":
            enProceso.push(tarea);
            let anteriorEnProceso = JSON.parse(localStorage.getItem('enProceso'));
            //Agraga las tareas anteriores si es que existen
            if (anteriorEnProceso != null) {
                enProceso.push(anteriorEnProceso.join(' '));
                localStorage.setItem('enProceso', JSON.stringify(enProceso))
            } else {
                localStorage.setItem('enProceso', JSON.stringify(enProceso))
            }
            $listaEnProceso.innerHTML += tarea;
            break;
        case "finalizada":
            finalizada.push(tarea);
            let anteriorFinalizada = JSON.parse(localStorage.getItem('finalizada'));
            //Agraga las tareas anteriores si es que existen
            if (anteriorFinalizada != null) {
                finalizada.push(anteriorFinalizada.join(' '));
                localStorage.setItem('finalizada', JSON.stringify(finalizada))
            } else {
                localStorage.setItem('finalizada', JSON.stringify(finalizada))
            }
            $listaFinalizada.innerHTML += tarea;
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