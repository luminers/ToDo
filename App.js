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
      }else{
          console.log("No hay")
      }
     }
     
 




});


