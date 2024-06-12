// Variables
var joc= new buscamines($("#nivell").val());
var crono=new cronometro(50);

$(document).ready(function() {
    nou();
});

function cargar_eventos(){
    $('.casella').mousedown(function(event) {
        if (event.which == 1) joc.comprobar($(this)); // Boton izquierdo
        else if (event.which == 3) joc.bandera($(this));
    });
    
    $('#buscamines').bind('contextmenu', function(e) {
	e.preventDefault();// evito que se ejecute el evento
    });
}

function nou(){
    joc= new buscamines($("#nivell").val());
    joc.nou();
    joc.cargar_puntuaciones();
    return false;
}

/************** JUEGO NUEVO ******************/

var taulell= new Array();
var resultats= new Array();

function buscamines(nivell){
    this.activo=false;
    this.fi=false;
    this.nivell= nivell;
    this.num_col=0;
    this.num_fila=0;
    this.num_mines=0;
    this.totals=0;
    this.mines=0;
    this.restants=0;
    this.banderes=0;
    this.banderes_mines=0;
    this.nou=function(){
        document.getElementById("buscamines").innerHTML="";
        this.iniciar();
        this.crear_taulell();
        cargar_eventos();
    }
    this.iniciar= function (){
        if(this.nivell=="DIFICIL"){ this.num_col=22; this.num_fila=22; this.num_mines=99;}
        else if (this.nivell=="NORMAL"){ this.num_col=16; this.num_fila=16; this.num_mines=40;}
        else { this.num_col=10; this.num_fila=10; this.num_mines=10;}
        
        this.totals=this.num_col*this.num_fila;
        this.mines=this.num_mines;
        this.restants=this.totals-this.num_mines;
        
        for (col=0; col<this.num_col; col++){                                     // Recorrer les columnes
            taulell[col]= new Array(); resultats[col]=new Array();
            for (fila=0; fila<this.num_fila; fila++)                               // Recorrer les files
                {taulell[col][fila]=0; resultats[col][fila]=9}                                            // Posar la casella a 0 
        }
        
        this.posar_mines();
        crono.initClock();
    };
    this.posar_mines= function(){
        do{    
            do{
                col=Math.floor(Math.random()*(this.num_col-1));                                            // Calculem la columna i fila aleatoriament
                fila=Math.floor(Math.random()*(this.num_fila-1));
                
                //document.write("ENTER "+col+" "+ fila+ "<br>");
            }while(taulell[col][fila]==-1)

            taulell[col][fila]=-1;                                         // Posem la mina
            this.mines--;                                                       // Disminuim la quantitat de mines

            // AUGEMENTAR ELS VOLTANTS DE LA MINA    
            for (fila2= Math.max(0,fila-1); fila2<Math.min(this.num_fila,fila+2); fila2++){
                for (col2= Math.max(0,col-1); col2<Math.min(this.num_col,col+2); col2++){
                    if (taulell[col2][fila2]!=-1) taulell[col2][fila2]-=-1;
                }
            }                    
        }while (this.mines>0);
        this.dades();
    };
    this.dades= function(){
        $("#taulell").val(this.num_col+"x"+this.num_fila);
        $("#totals").val(this.totals);
        $("#mines").val(this.num_mines);
        $("#restants").val(this.restants);
        $("#banderes").val(this.banderes);
    };
    
    this.activar= function(estado){
        crono.pauseClock();
        this.activo=estado;
    };
    // Funcio per comprobar si el joc esta actiu
    // Passem el numero de columna i fila
    this.comprobar = function (casella){
        if (!this.activo && !this.fi)  this.activar(true); 
        this.comprobar_casella(parseInt(casella.attr("col")),parseInt(casella.attr("row")));  
    };
    // Funcio per comprobar una casella
    // Passem el numero de columna i fila
    this.comprobar_casella= function (col, fila){
        casella=$("#T_"+col+"_"+fila);
        
        if (!casella.hasClass("cas_bandera") && resultats[col][fila]==9){
            resultats[col][fila]=taulell[col][fila];
            if (taulell[col][fila]!=-1) this.restar();
 
            this.mostrar(casella, taulell[col][fila]);
            
            switch(taulell[col][fila]){
                case -1: this.mostrar_mines(); break;
                case 0: this.mostrar_voltants(col,fila); break;
            }
            this.dades();
        }
    };
    this.mostrar= function(casella, valor){
        casella.removeClass("casella");
        switch(valor){
            case -1: casella.addClass("cas_mina"); break;
            case 0: casella.addClass("cas_0"); break;
            case 1: casella.addClass("cas_1"); break;
            case 2: casella.addClass("cas_2"); break;
            case 3: casella.addClass("cas_3"); break;
            case 4: casella.addClass("cas_4"); break;
            case 5: casella.addClass("cas_5"); break;
            case 6: casella.addClass("cas_6"); break;
            case 7: casella.addClass("cas_7"); break;
            case 8: casella.addClass("cas_8"); break;
        }
    };
    // Funcio per mostrar les mines de la taula
    this.mostrar_mines= function (){
        this.acabar(false);
        for (col=0; col<this.num_col; col++){                                   // Recorrem les columnes
            for (fila=0; fila<this.num_fila; fila++){                              // Recorrem les files
                if(resultats[col][fila]==9 && taulell[col][fila]==-1) 
                  this.mostrar($("#T_"+col+"_"+fila),taulell[col][fila]);
                else resultats[col][fila]=taulell[col][fila];
            }
        }
    };
    // Mostrar tot
    this.mostrar_tot= function (){
        for (col=0; col<this.num_col; col++){                                   // Recorrem les columnes
            for (fila=0; fila<this.num_fila; fila++){                              // Recorrem les files
                if(resultats[col][fila]==9) this.mostrar($("#T_"+col+"_"+fila),taulell[col][fila]);
                else resultats[col][fila]=taulell[col][fila];
            }
        }
    };
    // Funcio per controlar si es pot mostrar el voltants
    // Passem el numero de columna i fila
    this.mostrar_voltants= function (col, fila){  
        for (var fila2= Math.max(0,fila-1); fila2<Math.min(this.num_fila,fila+2); fila2++){
            for (var col2= Math.max(0,col-1); col2<Math.min(this.num_col,col+2); col2++){
                if (col!=col2 || fila!=fila2) this.comprobar_casella(col2, fila2); // Si no es la casella inicial
            }
        }
    };
    // Decrementar el numero de caselles restants
    // Si es 0, final del joc
    this.restar= function(){
        this.restants--;
        if (this.restants===0) this.acabar(true);
    };
    // Mostrar el missatge de GUANYAR o PERDRE
    this.acabar = function (estat){
        this.fi=true;
        this.activar(estat);
        this.mostrar_tot();
        if (estat) { this.guardar_puntuacion();this.cargar_puntuaciones();}
        else {alert("Has perdut");}
        
    };
    // Posat bandera
    this.bandera = function(casella){
        col=parseInt(casella.attr("col")); 
        fila=parseInt(casella.attr("row"))
        if (!this.fi && resultats[col][fila]==9){
            if (casella.hasClass("cas_bandera")) {
                casella.removeClass("cas_bandera");
                this.banderes--;
                if (taulell[col][fila]==-1) this.banderes_mines--;
            }
            else if (this.banderes<this.num_mines){
                casella.addClass("cas_bandera");
                this.banderes++;
                if (taulell[col][fila]==-1){
                    this.banderes_mines++;
                    if (this.banderes_mines===this.num_mines) this.acabar(true);
                }
            }
            this.dades();
        }
    };
    
    this.crear_taulell= function(){
        
        table=document.createElement('table');
        for (num_row =0; num_row<this.num_fila; num_row++){
            row= table.insertRow(num_row);
            for (num_cell=0; num_cell<this.num_col; num_cell++){
                cell= row.insertCell(num_cell);
                cell.id="T_"+num_cell+"_"+num_row;
                cell.setAttribute("col",num_cell);
                cell.setAttribute("row",num_row);
                cell.className="casella";
            }
        } 
        document.getElementById("buscamines").appendChild(table);
    }
    
    this.guardar_puntuacion= function(){
        if (confirm("Has guanyat!! \nVols guardar la puntuació?")){
            usuario = prompt("Introdueix el teu nom");
            nivel = this.nivell;
            tiempo=crono.total();
            $.ajax({  
                type: "POST",  
                url: "InsModEli.php",
                dataType: "json",
                data: {accion: "Insertar", nivel: nivel, totals:this.totals, mines:this.mines, restants:this.restants, banderes: this.banderes, tiempo: tiempo, usuario: usuario},  
                success: function(msg){ 
                    if (msg) alert("Partida guardada");
                    else alert("Partida NO guardada");
                },
                statusCode: {
                    404: function() {
                        alert( "ERROR: Servidor no encontrado" );
                    }
                }
            });  
        }
    }
    this.cargar_puntuaciones= function(){
        $('#puntuaciones').jqGrid('GridUnload');
        $('#puntuaciones').jqGrid({
            url: 'InsModEli.php?accion=ListadoWeb&filtro='+ this.nivell,
            datatype: 'json',
            mtype: 'GET',
            colNames:['Nivell','Totals', 'Mines','Restants','Banderes','Temps','Usuari','Data'],
            colModel :[ 
              {name:'Nivell', index:'nivel'}, 
              {name:'Totals', index:'totals'}, 
              {name:'Mines', index:'mines', align:'right'}, 
              {name:'Restants', index:'restants', align:'right'}, 
              {name:'Banderes', index:'banderes',  align:'right'}, 
              {name:'Temps', index:'tiempo', align:'right'}, 
              {name:'Usuari', index:'usuario', align:'right'}, 
              {name:'Data', index:'fecha', align:'right'}
            ],
            pager: '#pager',
            rowNum:10,
            rowList:[10,20,30],
            sortname: 'tiempo, fecha',
            sortorder: 'asc',
            viewrecords: true,
            caption: 'Puntuacions',
            width: $('#contingut_pagina').width(),
            emptyrecords: "No hi ha puntuacions"
          }); 
    }
}