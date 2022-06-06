// ! Declaracion de variables

let idTramite = 0;
let idPaciente = 0;
let dni;
let namePatient = `${apellido}, ${nombre}.`;
let entry;
let nombre;
let apellido;
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

function requestEntry(){
    option = prompt (`Bienvenido ${usuario}!! \n
    Por favor, ingrese ingrese la opcion que desea realizar \n
    1. Nuevo paciente \n
    2. Autorizaciones \n
    3. Salir`);
}

function incremento(atributo){
    return atributo + 1;
}

function autogestion(){
    let opcion = requestEntry();
    opcion = opcion.toLowerCase();

    while (opcion != "salir" || opcion != "3" || opcion != "esc"){
        if (opcion=="1" || opcion=="nuevo" || opcion=="nuevo paciente"){
            alert(`Por favor, ingrese los datos del nuevo paciente que desea cargar.`);
            let nombre = prompt("Nombre del paciente:");
            let apellido = prompt("Apellido del paciente:");
            let dni = prompt("DNI / LC / LE:");
            incremento (idPaciente);
            alert(`El nuevo paciente a sido cargado con el numero ${idpaciente} \n Paciente: ${namePatient} \n D.N.I: ${dni}`);
            console.log(`El nuevo paciente a sido cargado con el numero ${idpaciente} \n Paciente: ${namePatient} \n D.N.I: ${dni}`);
            requestEntry();
        } else if (opcion=="2" || opcion=="autorizacion" || opcion=="autorizaciones"){
            alert(`Por favor, ingrese los datos solicitados.`);
            let nombre = prompt("Nombre del paciente:");
            let apellido = prompt("Apellido del paciente:");
            let dni = prompt("DNI / LC / LE:");
            
            incremento (idTramite);
            alert(`El nuevo paciente a sido cargado con el numero ${idpaciente} \n Paciente: ${namePatient} \n D.N.I: ${dni}`);
            console.log(`El nuevo paciente a sido cargado con el numero ${idpaciente} \n Paciente: ${namePatient} \n D.N.I: ${dni}`);
            requestEntry();
        }
    }
}