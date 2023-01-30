let bienvenida = "Bienvenido al Refugio Lomitos&CO";
let despedida = "Gracias por visitar Lomitos&CO. Vuelva pronto";

/* #### FUNCION SI ADOPTA UN PERRO #### */
function adoptarPerro(){
    let numPerrosRefugio = 8;
    let numPerrosUsuario = parseInt(prompt(`En estos momentos tenemos ${numPerrosRefugio} perros en adopción. ¿Cuantos te gustaria adoptar?`));


    do{
        if(isNaN(numPerrosUsuario)){
            numPerrosUsuario = parseInt(prompt(`ERROR: Por favor ingresa un numero.  \n¿Cuantos perros te gustaria adoptar?`));
        }
        if(numPerrosUsuario > numPerrosRefugio){
            numPerrosUsuario = parseInt(prompt(`El numero ingresado excede los perros disponibles. Ingrese un numero valido. \n(Te recordamos que tenemos ${numPerrosRefugio} perros)`));
        }
    }
    while(isNaN(numPerrosUsuario) || numPerrosUsuario > numPerrosRefugio){
       
    }
    
    if(numPerrosUsuario <= numPerrosRefugio){
            numPerrosRefugio = numPerrosRefugio - numPerrosUsuario;
            alert(`Felicidades. Haz adoptado ${numPerrosUsuario} perros. Te invitamos a seguir adoptando en el futuro, aun tenemos ${numPerrosRefugio} perros.`);
    }
}

/* #### FUNCION SI ADOPTA UN GATO #### */
function adoptarGato(){
    alert("Lo siento. En estos momentos no tenemos gatos en adopción. Vuelva pronto");
}

/* #### FUNCION PARA APADRINAR ESPECIFICAMENTE #### */
function numMascotasPorApadrinar(){
    var num = parseInt(prompt(("DISCLAIMER: La cuota mensual minima es de 7 euros por animal. \n\n¿A cuantos de nuestros animales quieres apadrinar?")));

    return num;
}

/* #### FUNCION QUE CALCULA CUOTA TOTAL DE APADRINADO #### */
function calculoCuotaApadrinamiento(){
    let cuotaTotal = 0;
    let totalApadrinados = numMascotasPorApadrinar();
    
    alert("Ingresa la cuota mensual para cada uno en el siguiente paso");
    for (i = 1; i <= totalApadrinados; i++){

        let cuotaIndividual = parseInt(prompt(`Cuota numero ${i}:`));

        do{
                if(isNaN(cuotaIndividual)){
                    cuotaIndividual = parseInt(prompt(`Error: Por favor, ingresa un numero para la cuota ${i}:`));
                }
                if(cuotaIndividual < 7){
                    cuotaIndividual =  parseInt(prompt(`Error: La cuota minima mensual debe ser igual o mayor a 7 euros.\nPor favor, ingresa la cuota ${i}:`));
                }
            }
        while (cuotaIndividual < 7 || isNaN(cuotaIndividual));

    
        cuotaTotal = cuotaTotal + cuotaIndividual;
    }

    alert(`El total mensual por apadrinar a ${totalApadrinados} perros es de ${cuotaTotal}`);
}

/* #### FUNCION CONFIRMACION DE APADRINAMIENTO #### */
function confirmacionApadrinar(){
    let padrinoGeneral = prompt("¿Estas de acuerdo? S/N");

    if (padrinoGeneral === "S"){
        alert("Ahora eres padrino del Refugio Lomitos&CO \n¡Muchas gracias!");
    }else {
        alert(despedida);
    }
}


/* #### VOLVER MENU PRINCIPAL #### */
function volverMenu(){
    let volverMenu = prompt("Opción invalida. ¿Desea volver al menú principal? S/N");

    if(volverMenu === "S"){
        bienvenidaRefugio();
    }else if (volverMenu === "N"){
        alert(despedida);
    }else{
        alert("Opcion invalida. Vuelva pronto");
    }
}

/* #### FUNCION BIENVENIDA #### */
function bienvenidaRefugio(){
    let operacion = prompt("Para continuar, elige una de estas opciones: \nAdoptar \nApadrinar");

    if (operacion != null)
    operacion = operacion.toLowerCase();

    switch(operacion){
        case "adoptar":

       
        let seleccion = prompt("¿Que quieres adoptar?: \n- Perro \n- Gato");

        if (seleccion != null)
            seleccion = seleccion.toLowerCase();

                while(!(seleccion === "perro" || seleccion === "gato" || seleccion === null))
                {
                    seleccion= prompt("Opcion invalida. ¿Que quieres adoptar?: \n- Perro \n- Gato");
                    seleccion = seleccion.toLowerCase();
                }
                
                 switch(seleccion){
                    case "perro":
                        adoptarPerro();
                        break;
                    case "gato":
                        adoptarGato();
                        break; 
                }
          
        break;

        case "apadrinar":

            let apadrinamientoOpcion = prompt("Tenemos dos tipos de apadrinamiento:\n- General \n- Especifico \n\n¿En cual estas interesado?"); //tolwercase
            
            if (apadrinamientoOpcion != null)
            apadrinamientoOpcion = apadrinamientoOpcion.toLowerCase();
            
            
            while(!(apadrinamientoOpcion === "general" || apadrinamientoOpcion === "especifico" || apadrinamientoOpcion === null))
            {
                apadrinamientoOpcion = prompt("Opcion invalida. \nLos tipos de apadrinamiento son:\n- General \n- Especifico \n\n¿En cual estas interesado?");
                apadrinamientoOpcion = apadrinamientoOpcion.toLowerCase();
            }
            
            switch(apadrinamientoOpcion){
                case "general":
                    alert("La cuota mensual es de 10 euros");
                    confirmacionApadrinar();
                    break;
                case "especifico":
                    calculoCuotaApadrinamiento();
                    confirmacionApadrinar()
                    break;
            }
            
        break;

        default:
            volverMenu();
        break;    
    }
}

alert(bienvenida);
bienvenidaRefugio();

