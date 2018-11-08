            function buscarPosicio() {
                
                moure_esquerra = false;
                moure_dreta = false;
                
                if ((posicio[0+1] && posicio[0-1]) !== 1){
                    moure_esquerra = true;
                    moure_dreta = true;
                    
                } else if (posicio[0+1] !== 1){
                    moure_dreta = true;
                    moure_esquerra= false;
                    
                } else if (posicio[0+1] !== 1){
                    moure_dreta = false;
                    moure_esquerra = true;
                    
                } else {
                    moure_dreta = false;
                    moure_esquerra = false;
                }
 
            }
            
            var fila_f1 = posicio[0];
            var columna_f1 = posicio[1];
            
            var fila_f2 = posicio[2];
            var columna_f2 = posicio[3];
            
            var fila_f3 = posicio[4];
            var columna_f3 = posicio[5];
            
            document.write(fila_f1 + "</br>");
            document.write(columna_f1 + "</br>");
            
            document.write(fila_f2 + "</br>");
            document.write(columna_f2 + "</br>");
            
            document.write(fila_f3 + "</br>");
            document.write(columna_f3 + "</br>");
            
            
            
            function comprovarPosicio() {
                //Primer comprova les posicions valides 
                for (i = 0; i < files.length; i++) {
                    var valid = [];
                    if (files[i-1] && columnes[i] !== 0) {
                        //amunt ^
                        valid.push(amunt);
                    } else if (files[i+1] && columnes[i] !== 0){
                        //avall v
                        valid.push(avall);
                    } else if (files[i] && columnes[i-1] !== 0){
                        //esquerra <
                        valid.push(esquerra);
                    } else if (files[i] && columnes[i+1] !== 0){
                        //dreta >
                        valid.push(dreta); 
                    }

                    //De manera aleatoria es defineix a "direccio" la seguent posicions valida on mourem el fantasma (amunt, avall, esquerra, dreta).
                    direccio = valid[Math.floor(Math.random() * valid.length)];

                    //Un cop es selecciona la direccio valida de manera aleatoria canviarem les variables que corresponguin
                    if (direccio === amunt) {
                        //amunt ^
                        filaValida = files[i-1];
                        columnaValida = columnes[i];
                    } else if (direccio === avall){
                        //avall v
                        filaValida = files[i+1];
                        columnaValida = columnes[i];
                    } else if (direccio === esquerra){
                        //esquerra <
                        filaValida = files[i];
                        columnaValida = columnes[i-1];
                    } else if (direccio === dreta){
                        //dreta >
                        filaValida = files[i];
                        columnaValida = columnes[i+1];
                    }
                }
                
            document.write("LA POSICIO VALIDA PEL SEGÜENT MOVIMENT ÉS LA FILA" + filaValida + " I LA COLUMNA " + columnaValida);
                
            }
            
            
            
            function comprovarPosicio() {
                //Primer comprova les posicions valides i les guarda en un array en cas de que ho siguin: perque i = 0
                for (i = 0; i < files.length; i++) {
                    
                    var valid = [];
                    
                    document.write((files[i]) - 1);document.write(" - ");
                    document.write((files[i]) + 1);document.write(" - ");
                    document.write((columnes[i]) - 1);document.write(" - ");
                    document.write((columnes[i]) + 1);document.write(" - ");

                    
                    //CORREGIR COMPARADORS
                    //CAL COMPARAR LES POSICIONS DELS ARRAYS COM CORRESPONGUI
                    //ESTEM COMPARANT CORRECTAMENT?
                    
                    if (
                            ((fila_jugador[i]) - 1) && (columna_jugador[i]) !== 1
                            ){
                        //pot anar amunt ^
                        valid.push("amunt");
                    }
                   
                    if (
                            ((fila_jugador[i]) + 1) && (columna_jugador[i]) !== 1
                            ){
                        //pot anar avall
                        valid.push("avall");
                    }
                    
                    if (
                            (fila_jugador[i] && ((columna_jugador[i]) - 1)) !== 1
                            ){
                        //pot anar esquerra <
                        valid.push("esquerra");
                    }
                    
                    if (
                            (fila_jugador[i] && ((columna_jugador[i]) + 1)) !== 1
                            ){
                        //pot anar dreta >
                        valid.push("dreta");
                    }
                    
                    
                    //De manera aleatoria es defineix a "direccio" la seguent posicions valida on mourem el fantasma (amunt, avall, esquerra, dreta).
                    document.write(valid);
                    var direccio = valid[Math.floor(Math.random() * valid.length)];
                    
                    valid = [];
                    filaValida = [];
                    columnaValida = [];

                    //Un cop es selecciona la direccio valida de manera aleatoria canviarem les variables que corresponguin
                    if (direccio === "amunt") {
                        //amunt ^
                        filaValida = (files[i] - 1);
                        columnaValida = columnes[i];
                    }
                    
                    if (direccio === "avall"){
                        //avall v
                        filaValida = (files[i] + 1);
                        columnaValida = columnes[i];
                    }
                    
                    if (direccio === "esquerra"){
                        //esquerra <
                        filaValida = files[i];
                        columnaValida = (columnes[i] - 1);
                    }
                    
                    if (direccio === "dreta"){
                        //dreta >
                        filaValida = files[i];
                        columnaValida = (columnes[i] + 1);
                    }
                    
                    
                    document.write("FANTASME:::: " + i + ":::: FILA " + filaValida + " - COLUMNA " + columnaValida);document.write(".          ." +direccio);
                    document.write("</br>");
                }
            }
            
            
            
            
            
            
            
            function comprovarPosicio() {
                //Primer comprova les posicions valides i les guarda en un array en cas de que ho siguin: perque i = 0
                for (i = 0; i < files.length; i++) {
                    
                    var valid = [];

                    document.write(" </br> ");
                    
                    
                    //CORREGIR COMPARADORS
                    //CAL COMPARAR LES POSICIONS DELS ARRAYS COM CORRESPONGUI
                    //ESTEM COMPARANT CORRECTAMENT?
                    //HEM DE COMPARAR EL CONTINGUT DE L'ARRAY QUE VOLEM VALIDAR AMB EL !== 1
                    
                    
                    //SI LA POSICIO ON ESTA ((files[i]) - 1 && columnes[i]) no és igual a 1 {}

                    
                    
                    if (
                            ((files[i]) - 1) && (columnes[i]) !== 1
                            ){
                        //pot anar amunt ^
                        valid.push("amunt");
                    }
                   
                    if (
                            ((files[i]) + 1) && (columnes[i]) !== 1
                            ){
                        //pot anar avall
                        valid.push("avall");
                    }
                    
                    if (
                            (files[i] && ((columnes[i]) - 1)) !== 1
                            ){
                        //pot anar esquerra <
                        valid.push("esquerra");
                    }
                    
                    if (
                            (files[i] && ((columnes[i]) + 1)) !== 1
                            ){
                        //pot anar dreta >
                        valid.push("dreta");
                    }
                    
                    
                    //De manera aleatoria es defineix a "direccio" la seguent posicions valida on mourem el fantasma (amunt, avall, esquerra, dreta).
                    document.write(valid);
                    var direccio = valid[Math.floor(Math.random() * valid.length)];
                    
                    valid = [];
                    filaValida = [];
                    columnaValida = [];

                    //Un cop es selecciona la direccio valida de manera aleatoria canviarem les variables que corresponguin
                    if (direccio === "amunt") {
                        //amunt ^
                        filaValida = (files[i] - 1);
                        columnaValida = columnes[i];
                    }
                    
                    if (direccio === "avall"){
                        //avall v
                        filaValida = (files[i] + 1);
                        columnaValida = columnes[i];
                    }
                    
                    if (direccio === "esquerra"){
                        //esquerra <
                        filaValida = files[i];
                        columnaValida = (columnes[i] - 1);
                    }
                    
                    if (direccio === "dreta"){
                        //dreta >
                        filaValida = files[i];
                        columnaValida = (columnes[i] + 1);
                    }
                    
                    
                    document.write("FANTASME:::: " + i + ":::: FILA " + filaValida + " - COLUMNA " + columnaValida);document.write(".          ." +direccio);
                    document.write("</br>");
                }
            }