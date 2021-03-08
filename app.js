const grid = document.querySelector('.grid');

//Dibujar el mapa
var squares = new Array();

function hacer_cuadro(){
    grid.innerHTML = "";
    //Se obtienen los valores del grid
    var x = document.getElementById("M").value;
    var y = document.getElementById("N").value;
    draw(x,y);
    var width = 300 / x;
    var height = 300 / y;
    var elementos = document.getElementsByClassName("tamanio");
    for(let i = 0; i < elementos.length; i++){
        elementos[i].style.height = height;
        elementos[i].style.width = width;
    }
    grid.style.gridTemplate = "repeat("+x+", 1fr) / repeat("+y+", 1fr)";

}


function draw(m,n){

    //Creacion del mapa
    var layout = new Array();
    for(let i = 0; i<m; i++){
        layout[i] = new Array();
        for(let j=0; j<n; j++){
            layout[i][j] = 0;
        }
    }

    var contador_i = 1;
    var contador_j = 1;
    for( var i=0; i < m; i++ ){
        squares[i] = new Array();
        console.log("contador_i: " + contador_i); 
        for(var j=0; j < n; j++){
            const square = document.createElement('div')
            grid.appendChild(square)
            squares[i][j] = square;
            
            //grupo al que pertenece
            console.log("contador j: "+ contador_j);
            switch (contador_i){
                //Grupo 1
                case 1: 
                    if(contador_j  == 1){
                        //color rojo
                        layout[i][j] = 3;
                    }
                    else{
                        //color azul
                        layout[i][j] = 1;
                    } 
                break;
                //grupo 2
                case 2:
                     if(contador_j  == 1){
                        //color azul
                        layout[i][j] = 1;
                    }
                    else{
                        //color verde
                        layout[i][j] = 2;
                    } 
                break;
                //grupo 3
                case 3:
                    if(contador_j  == 1){
                        //color verde
                        layout[i][j] = 2;
                    }
                    else{
                        //color rojo
                        layout[i][j] = 3;
                    }
                break;
            }
            
            if (contador_j == 2 || j == n-1){
                contador_j = 0;
            }
            contador_j += 1;
            //Agrega colores a la cuadricula
            if(layout[i][j] === 0) {
                squares[i][j].classList.add('fondo')
                squares[i][j].classList.add('tamanio')
            } else if (layout[i][j] === 1) {
                squares[i][j].classList.add('azul')
                squares[i][j].classList.add('tamanio')
            } else if (layout[i][j] === 2) {
                squares[i][j].classList.add('verde')
                squares[i][j].classList.add('tamanio')
            } else if (layout[i][j] === 3) {
                squares[i][j].classList.add('rojo')
                squares[i][j].classList.add('tamanio')
            }
        }
        
        if (contador_i == 3){
            contador_i = 0;
        }
        contador_i += 1;
    }
}