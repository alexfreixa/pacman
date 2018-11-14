
var board = [];

//GHOSTS, VALUES: [row(1-28), column(1-28), direction(0-3)]
//PLAYER, VALUES: [row(1-29), column(1-29), direction(0-3), teclat(0-3)]



board[0]=      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
board[1]=      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
board[2]=      [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1];
board[3]=      [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1];
board[4]=      [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1];
board[5]=      [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1];
board[6]=      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
board[7]=      [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];
board[8]=      [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];
board[9]=      [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1];
board[10]=     [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1];
board[11]=     [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1];
board[12]=     [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1];
board[13]=     [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1];
board[14]=     [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1];
board[15]=     [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1];
board[16]=     [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1];
board[17]=     [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1];
board[18]=     [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1];
board[19]=     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
board[20]=     [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1];
board[21]=     [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1];
board[22]=     [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1];
board[23]=     [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1];
board[24]=     [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1];
board[25]=     [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1];
board[26]=     [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1];
board[27]=     [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1];
board[28]=     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
board[29]=     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var row_ghost = [];
var column_ghost = [];
var ghost = [];


function generateGhosts() {
    comptador = 0;
        do {
            var row = getRandomInt(0, 29);
            var column = getRandomInt(0, 29);
            var posicio_inicial = board[row][column];
            if (posicio_inicial === 0) {
                board[row][column] = "F" + comptador;
                row_ghost.push(row);
                column_ghost.push(column);
                comptador++;
            }
        } while (comptador < 3) //creates 3 ghosts on valid positions
}

var player = [];

function generatePlayer() {
    players = 0;
        do {
            var row_player = 14;//getRandomInt(0, 29);
            var column_player = 14;//getRandomInt(0, 29);
            var posicio_inicial = board[row_player][column_player];
            if (posicio_inicial === 0) {
                players++;
                board[row_player][column_player] = "JG";
                
                player.push(row_player);
                player.push(column_player);
                player.push(0);
                player.push(0);

            }
        } while (players < 1) //creates one player

}

function direccioInicial(){
    //Check the new first valid random position
    for (i = 0; i < comptador; i++) {
        
        var valid = [];
        
        var resta_fila = (row_ghost[i] - 1);
        var suma_fila = (row_ghost[i] + 1);
        var resta_columna = (column_ghost[i] - 1);
        var suma_columna = (column_ghost[i] + 1);
        
        var up = board[resta_fila][column_ghost[i]];
        var down = board[suma_fila][column_ghost[i]];
        var left = board[row_ghost[i]][resta_columna];
        var right = board[row_ghost[i]][suma_columna];
        
        if (up !== 1){
            //Value un the board position is 0, it can go up ^
            valid.push(0);
        }
        
        if (down !== 1){
            //Value un the board position is 0, it can go down
            valid.push(1);
        }
        
        if (left !== 1){
            //Value un the board position is 0, it can go left <
            valid.push(2);
        }
        
        if (right !== 1){
            //Value un the board position is 0, it can go right >
            valid.push(3);
        }
        
        //Once we checked the possible new valid positions, with the array direction we choose only ONE ELEMENT RANDOMLY
        direction = valid[Math.floor(Math.random() * valid.length)];
        
        //ONLY ONE "direction" WILL BE SENDED BELOW, chosen randomly
        if (direction === 0) { // 0 means up
            //up ^
            ghost[i] = [resta_fila, column_ghost[i], direction];
        }
        
        if (direction === 1){  // 1 means down
            //down v
            ghost[i] = [suma_fila, column_ghost[i], direction];
        }
        
        if (direction === 2){ // 2 means left
            //left <
            ghost[i] = [row_ghost[i], resta_columna, direction];
        }
        
        if (direction === 3){ // 3 means right
            //right >
            ghost[i] = [row_ghost[i], suma_columna, direction];
        }
    }
}

function checkGhostPosition() {
    //Check new next positions
    rowValid = []; //Set a new array to save the next row valid position for each ghost
    columnValid = []; //Set a new array to save the next column valid position for each ghost
    
    for (i = 0; i < ghost.length; i++) {
        
        var valid = [];
        
        resta_fila = (row_ghost[i] - 1);
        suma_fila = (row_ghost[i] + 1);
        resta_columna = (column_ghost[i] - 1);
        suma_columna = (column_ghost[i] + 1);
        
        up = board[resta_fila][column_ghost[i]];    //0
        down = board[suma_fila][column_ghost[i]];   //0
        left = board[row_ghost[i]][resta_columna];  //0
        right = board[row_ghost[i]][suma_columna];  //1
        
        direccio = ghost[i][2];
        suma_direccions = up + down + left + right;
        
        if (((direccio === 0) && (up !== 0)) || ((direccio === 1) && (down !== 0)) || ((direccio === 2) && (left !== 0)) || ((direccio === 3) && (right !== 0)) || suma_direccions === 1) {

            if (up === 0){
                //Value un the board position is 0, it can go up ^
                valid.push(0);
            }

            if (down === 0){
                //Value un the board position is 0, it can go down
                valid.push(1);
            }

            if (left === 0){
                //Value un the board position is 0, it can go left <
                valid.push(2);
                
            }

            if (right === 0){
                //Value un the board position is 0, it can go right >
                valid.push(3);
            }

            //Once we checked the possible new valid positions, with the array direction we choose only ONE ELEMENT RANDOMLY
            //We set the new direction randomly
            direccio = valid[Math.floor(Math.random() * valid.length)];
        
        }
           
        if (direccio === 0 && up === 0) { // 0 means up
            //up ^
            rowValid[i] = (resta_fila);
            columnValid[i] = column_ghost[i];
        }
        
        if (direccio === 1 && down === 0){  // 1 means down
            //down v
            rowValid[i] = (suma_fila);
            columnValid[i] = column_ghost[i];
        }
        
        if (direccio === 2 && left === 0){ // 2 means left
            //left <
            rowValid[i] = row_ghost[i];
            columnValid[i] = (resta_columna);
        }
        
        if (direccio === 3 && right === 0){ // 3 means right
            //right >
            rowValid[i] = row_ghost[i];
            columnValid[i] = (suma_columna);
        }
        
        ghost[i] = [rowValid[i], columnValid[i], direccio];
        
    }
}

function updateGhostPosition(){
    for (i = 0; i < ghost.length; i++) {
        
        var next = ghost[i][2];
        var x = rowValid[i];
        var y = columnValid[i];

        if (next === 0) {
            board[x][y] = "F" + i;
        } else if (next === 1){
            board[x][y] = "F" + i;
        } else if (next === 2){
            board[x][y] = "F" + i;
        } else if (next === 3){
            board[x][y] = "F" + i;
        }
        
        board[row_ghost[i]][column_ghost[i]] = 0; //Before update the new row and column, we update the last position to 0 value again so its a path again
        row_ghost[i] = x;       
        column_ghost[i] = y;
        ghost[i] = [x, y, next]; //Set new values of the actual ghost position
        
    }
}

function checkPlayerPosition() {

    r_f = (player[0] - 1);
    s_f = (player[0] + 1);
    r_c = (player[1] - 1);
    s_c = (player[1] + 1);

    amt = board[r_f][player[1]];
    avl = board[s_f][player[1]];
    esq = board[player[0]][r_c];
    drt = board[player[0]][s_c];
    
    
    if (amt !== 1 && tecla === 0){
        //Value un the board position is 0, it can go up ^
        playerRow = (r_f);
        playerColumn = player[1];
        nxt = tecla;
    }

    if (avl !== 1 && tecla === 1){
        //Value un the board position is 0, it can go down
        playerRow = (s_f);
        playerColumn = player[1];
        nxt = tecla;
    }

    if (esq !== 1 && tecla === 2){
        //Value un the board position is 0, it can go left <
        playerRow = player[0];
        playerColumn = (r_c);
        nxt = tecla;
    }

    if (drt !== 1 && tecla === 3){
        //Value un the board position is 0, it can go right >
        playerRow = player[0];
        playerColumn = (s_c);
        nxt = tecla;
    }
    
    pf = player[0];
    pc = player[1];
    player = [playerRow, playerColumn, nxt, tecla];
    updatePlayerPosition();
}


function updatePlayerPosition(){
        
        var x = playerRow;
        var y = playerColumn;

        if (nxt === 0) {
            board[x][y] = "JG";
        } else if (nxt === 1){
            board[x][y] = "JG";
        } else if (nxt === 2){
            board[x][y] = "JG";
        } else if (nxt === 3){
            board[x][y] = "JG";
        }
        if ((pf !== playerRow || pc !== playerColumn)){ //Executes only if player moved
        board[pf][pc] = 0;                              //Before update the new row and column, we update the last position to 0 value again so its a path again
        }
        
        player[0] = x;       
        player[1] = y;
        
        player = [x, y, nxt, tecla]; //Set new values of the actual's player position
}

var colors = [];

function setup(){
    createCanvas(900, 900);
    for (var i = 0; i < board.length; i++) {
        colors[i] = [];
            for (var j = 0; j < board.length; j++){
                if (board[j][i] === 0){
                    colors[i][j] = (0);
                } else if(board[j][i] === 1){
                    colors[i][j] = (100);
                } else if(board[j][i] === "JG"){
                    colors[i][j] = (150);
                } else if(board[j][i] === "F0"){
                    colors[i][j] = (500);
                } else if(board[j][i] === "F1"){
                    colors[i][j] = (500);
                } else if(board[j][i] === "F2"){
                    colors[i][j] = (500);
                }
            }
        }
}

function draw(){
    background(51);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++){
            var x = i * 30;
            var y = j * 30;

            fill(colors[i][j]);
            stroke(0);
            rect(x, y, 30, 30);

        }
    }
}

generateGhosts(); //Generate 3 ghosts on valid positions.
generatePlayer(); //Generate one player on a valid position.
direccioInicial(); //Set the initial movement directiob to ghosts

function ultimaTecla(e) {                                
    console.log("Event "+ e.type);
    console.log(e);//a la consola podeu veure l'objecte que té dos atributs on s'hi indica la tecla pitjada.
    if (e.code == "ArrowUp") {
            player[3] = 0;
            tecla = player[3];
    }
    if (e.code == "ArrowDown") {
            player[3] = 1;
            tecla = player[3];
    }
    if (e.code == "ArrowLeft") {
            player[3] = 2;
            tecla = player[3];
    }
    if (e.code == "ArrowRight") {
            player[3] = 3;
            tecla = player[3];
    }
}

window.setInterval(function(){
    setup();
    draw();
    checkGhostPosition();
    updateGhostPosition();
    checkPlayerPosition();
    checkBoth();
    
}, 1000);