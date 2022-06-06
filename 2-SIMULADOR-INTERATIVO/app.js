// ! Declaracion de variables

let idTramite = 0;
let idPaciente
let nombre
let surname
let namePatient
let opcion

// ! Declaracion de funciones

function requestEntry() {
    opcion = prompt(`Por favor, ingrese el numero de la accion que desea realizar: \n 
    1. Nuevo paciente \n
    2. Nuevo trámite \n
    3. Esc`)
    console.log(opcion);
}

function api() {

    requestEntry();

    while (opcion != "3") {
        if (opcion == "1") {
            let nombre = prompt("Por favor, ingrese el nombre del paciente: ")
            let surname = prompt("Por favor, ingrese el apellido del paciente: ")
            let idPaciente = prompt("Por favor, ingrese el numero de identificacion del paciente: ")
            namePatient = `${surname}, ${nombre}.`
            namePatient = namePatient.toUpperCase();
            alert(`Paciente ${namePatient} \nIdentificacion: ${idPaciente}`)
            console.log(`Paciente ${namePatient} \nIdentificacion: ${idPaciente}`)
            requestEntry();
        } else if (opcion == "2") {
            idTramite = idTramite + 1;
            let idPaciente = prompt("Por favor, ingrese el numero de identificacion del paciente: ")
            let nombre = prompt("Por favor, ingrese el nombre del paciente: ")
            let surname = prompt("Por favor, ingrese el apellido del paciente: ")
            namePatient = `${surname}, ${nombre}.`
            namePatient = namePatient.toUpperCase();
            alert(`Identificacion del trámite: ${idTramite} \n Identificacion del paciente: ${idPaciente} \n Nombre del paciente: ${namePatient}`)
            console.log(`Identificacion del trámite: ${idTramite} \n Identificacion del paciente: ${idPaciente} \n Paciente: ${namePatient}`)
            requestEntry();
        } else {
            alert("Usted ha salido del programa");
            console.log("Usted ha salido del programa");
            break;
        }
    }
}

api();