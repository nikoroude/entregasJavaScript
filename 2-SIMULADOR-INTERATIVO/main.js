// ! Declaracion de variables

var idTramite = 0;
var idPaciente = 0;
let pedido;
let obraSocial;
let dni;
let entry;
let nombre;
let apellido;
let opcion = 0;
let namePatient;
let usuario;


// ! Declaracion de funciones

// function requestEntry(entry) {
//     let localEntry = prompt("Por favor, ingrese su " + entry)
//     let resultado = entry + 2;
//     return resultado;
// }

// function get(data){
//     let dataFunction = requestEntry(nombre);
//     console.log(dataFunction)
// }

// get(namePatient);

function requestEntry() {
    opcion = prompt(`Bienvenido ${usuario}!! \n
    Por favor, ingrese ingrese la opcion que desea realizar \n
    1. Nuevo paciente \n
    2. Autorizaciones \n
    3. Salir`);
}

function choisePedido() {
    pedido = +prompt(`¿Que desea autorizar? (Ingrese el numero segun corresponda) \n 1. Cirugia \n 2. RMN/TAC \n 3. Ecodoppler \n 4. Hemodinamia - Cateterismo \n 5. Gastroenterologia \n 6. Electroencefalograma / Electromiografia \n 7. Radiografias / Electrocardiograma / Laboratorios / Consulta`);
}

function logIn(){
    usuario = prompt("Por favor, ingresa tu nombre");
    usuario = usuario.toUpperCase();
}

function incremento(a) {
    a + 1;
    return a;
}

function autogestion() {
    // logIn();
    requestEntry();
    // opcion = opcion.toLowerCase();

    while (opcion != "3") {
        if (opcion == "1") {
            alert(`Por favor, ingrese los datos del nuevo paciente que desea cargar.`);
            nombre = prompt("Nombre del paciente:");
            apellido = prompt("Apellido del paciente:");
            namePatient = `${apellido}, ${nombre}.`
            dni = prompt("DNI / LC / LE:");
            incremento(idPaciente);
            console.log(`El nuevo paciente a sido cargado con el numero ${idPaciente} \n Paciente: ${namePatient} \n D.N.I: ${dni}`)
            alert(`El nuevo paciente ha sido cargado con el numero ${idPaciente} \n Paciente: ${namePatient} \n D.N.I: ${dni}`);
            requestEntry();
        } else if (opcion == "2") {
            let autorizacionOpcion = prompt(`Elija la opcion segun corresponda \n 1. PAMI \n 2. IOSPER \n 3. Otra obra social`);
            autorizacionOpcion = autorizacionOpcion.toLocaleLowerCase();
            if (autorizacionOpcion == "1" || autorizacionOpcion == "pami") {
                alert(`Por favor, ingrese los datos solicitados.`);
                nombre = prompt("Nombre del paciente:");
                apellido = prompt("Apellido del paciente:");
                dni = prompt("DNI / LC / LE:");
                obraSocial = "PAMI";
                choisePedido;
                switch (pedido) {
                    case 1:
                        pedido = "CIRUGIA";
                        break;
                    case 2:
                        pedido = "RMN / TAC";
                        break;
                    case 3:
                        pedido = "ECODOPPLER";
                        break;
                    case 4:
                        pedido = "HEMODINAMIA";
                        break;
                    case 5:
                        pedido = "GASTROENTEROLOGIA";
                        break;
                    case 6:
                        pedido = "EEG / EMG";
                        break;
                    case 7:
                        pedido = "RX / ECG / LABORATORIO / CONSULTA";
                        break;
                    case 0:
                        break;
                    case pedido < 0 || pedido > 7:
                        alert(`Dato ingresado no valido, por favor, intentelo nuevamente`);
                        choisePedido();
                        break;
                }
                incremento(idTramite);
                alert(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social; ${obraSocial} \n Pedido: ${pedido}`);
                console.log(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social; ${obraSocial} \n Pedido: ${pedido}`);
                requestEntry();
            } else if (autorizacionOpcion == "2" || autorizacionOpcion == "iosper") {
                alert(`Por favor, ingrese los datos solicitados.`);
                nombre = prompt("Nombre del paciente:");
                apellido = prompt("Apellido del paciente:");
                dni = prompt("DNI / LC / LE:");
                obraSocial = "IOSPER";
                pedido = "CIRUGIA";
                incremento(idTramite);
                alert(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social; ${obraSocial} \n Pedido: ${pedido}`);
                console.log(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social; ${obraSocial} \n Pedido: ${pedido}`);
                requestEntry();
            } else if (autorizacionOpcion == "3" || autorizacionOpcion == "otra"){
                alert(`Por favor, ingrese los datos solicitados.`);
                nombre = prompt("Nombre del paciente:");
                apellido = prompt("Apellido del paciente:");
                dni = prompt("DNI / LC / LE:");
                obraSocial = prompt("Obra Social");
                obraSocial = obraSocial.toUpperCase();
                pedido = "CIRUGIA";
                incremento(idTramite);
                alert(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social; ${obraSocial} \n Pedido: ${pedido}`);
                console.log(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social; ${obraSocial} \n Pedido: ${pedido}`);
                requestEntry();
            } else {
                alert("Los datos ingresados no son validos. Por favor, ingrese nuevamente");
                requestEntry();
            }
        } else if (opcion<"1" || opcion>"3"){
            alert("Los datos ingresados no son validos. Por favor, ingrese nuevamente");
            requestEntry();
        } else{
            alert("Usted ha salido del programa");
            console.log("Usted ha salido del programa");
            break;
        }
    }
}

autogestion();