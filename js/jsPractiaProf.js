function MostrarOcultar(){
    let tabla = document.getElementById("dv-table");
    
    if(tabla.hidden){
        tabla.hidden = false;
    }else{
        tabla.hidden = true;
    }
}