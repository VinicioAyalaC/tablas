function generarTablas(){
    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = "<h1>PROBANDO</h1>";

    let contenido="";
    let variable=5;
    
    for(let i=1; i<=10; i++){
        contenido= contenido + "<tr><td>"+ variable+' * '+i+"</td><td>"+(variable*i)+" </td><tr>"; 
    }
    contenedor.innerHTML = contenido;
}