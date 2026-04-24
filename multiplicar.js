function generarTablas(){
    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = "<h1>PROBANDO</h1>";

    let contenido="";
    let variable=5;
    
    for(let i=1; i<=10; i++){
        contenido= contenido + "<p>"+ variable+' * '+i+" = "+(variable*i)+" </p>"; 
    }
    contenedor.innerHTML = contenido;
}