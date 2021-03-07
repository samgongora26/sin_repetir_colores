const grid = document.querySelector('.grid');

//Creacion del mapa
var layout = new Array();
for(let i = 0; i<10; i++){
    layout[i] = new Array();
    for(let j=0; j<10; j++){
        layout[i][j] = 0;
    }
}

//Dibujar el mapa
var squares = new Array();
function draw(){
    for( var i=0; i < 8; i++ ){
        squares[i] = new Array();
        for(var j=0; j < 8; j++){
            const square = document.createElement('div')
            grid.appendChild(square)
            squares[i][j] = square;
            //add layout to the board
            if(layout[i][j] === 0) {
                squares[i][j].classList.add('fondo')
            } else if (layout[i][j] === 1) {
                squares[i][j].classList.add('azul')
            } else if (layout[i][j] === 2) {
                squares[i][j].classList.add('verde')
            } else if (layout[i][j] === 3) {
                squares[i][j].classList.add('rojo')
            }
 
        }
    }
}

draw()


