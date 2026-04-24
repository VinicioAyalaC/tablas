function generarTablas(){
    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = "<h1>PROBANDO</h1>";

    let contenido="";
    
    for(let i=1; i<=10; i++){
        contenido= contenido + "<td>"+' 3 * '+i+" </td> " + "<td> "+(3*i)+" </td>"; 
    }
    contenedor.innerHTML = contenido;
}