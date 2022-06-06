// ! Declaracion de variables

let idTramite
let idPaciente
let namePatient
let entry
let nombre
let surname
let dataFunction
let opcion


// ! Declaracion de funciones

function requestEntry() {
    opcion = prompt(`Por favor, ingrese el numero de la accion que desea realizar: \n 
    1. Nuevo paciente \n
    2. Nuevo trámite \n
    3. Esc`)
    console.log(opcion);
    // return opcion
}

// opcion = prompt(`Por favor, ingrese el numero de la accion que desea realizar: \n 
// 1. Nuevo paciente \n
// 2. Nuevo trámite \n
// 3. Esc`)

// requestEntry();
// console.log(opcion)

function api() {

    let opcion = requestEntry();
    opcion = opcion.toLowerCase();

    while (opcion != "esc" || opcion != "3") {
        if (opcion == "1") {
            let nombre = prompt("Por favor, ingrese el nombre del paciente: ")
            let surname = prompt("Por favor, ingrese el apellido del paciente: ")
            let idPaciente = prompt("Por favor, ingrese el numero de identificacion del paciente: ")
            alert(`Nombre: ${nombre} \n Apellido: ${surname} \n Identificacion: ${idPaciente}`)
            console.log(`Nombre: ${nombre} \n Apellido: ${surname} \n Identificacion: ${idPaciente}`)
            requestEntry();
        } else if (opcion == "2") {
            let idTramite = prompt("Por favor, ingrese el numero de identificacion del trámite: ")
            let idPaciente = prompt("Por favor, ingrese el numero de identificacion del paciente: ")
            let namePatient = prompt("Por favor, ingrese el nombre del paciente: ")
            alert(`Identificacion del trámite: ${idTramite} \n Identificacion del paciente: ${idPaciente} \n Nombre del paciente: ${namePatient}`)
            console.log(`Identificacion del trámite: ${idTramite} \n Identificacion del paciente: ${idPaciente} \n Nombre del paciente: ${namePatient}`)
            requestEntry();
        } else {
            alert("Usted ha salido del programa");
            console.log("Usted ha salido del programa");
            break;
        }
    }
}

api();