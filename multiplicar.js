function generarTablas(){

    let componente = document.getElementById("numeroInput");
    let valor = parseInt(componente.value);

    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = "<h1>PROBANDO</h1>";

    let contenido="";
      
    for(let i=1; i<=10; i++){
        contenido= contenido + "<tr><td>"+ valor+' * '+i+"</td><td>"+(valor*i)+" </td><tr>"; 
    }
    contenedor.innerHTML = contenido;
}