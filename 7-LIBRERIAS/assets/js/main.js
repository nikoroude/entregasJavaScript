//TODO
//TODO
//TODO      ESTE ARCHIVO NO ESTA EN USO!!!
//TODO
//TODO
//TODO
//TODO// ! Declaracion de variables

let idTramite = 0;
var idPaciente = 0;
let iArray = 0;
let pedido;
let obraSocial;
let dni;
let entry;
let nombre;
let apellido;
let opcion = 0;
let namePatient;
let usuario;
let paciente; //* variable que se ingresa como objeto Paciente, luego se carga en array pacientesList

// ! Arrays

let arrayPacientes = [];

let arrayPedidos = [];

// ! Objetos

class Paciente {
    constructor (fullName, dni, obraSocial="SIN OBRA SOCIAL", id) {
        this.fullName = namePatient;
        this.dni = dni;
        this.obraSocial = obraSocial;
        this.id = idPaciente;
    }
}

class Pedidos {
    constructor (fullName, dni, obraSocial, pedido, id) {
        this.fullName = namePatient;
        this.dni = dni;
        this.obraSocial= obraSocial;
        this.pedido = pedido;
        this.id = idTramite;
    }
}


// ! Declaracion de funciones

function requestEntry() {
    opcion = prompt(`Bienvenido ${usuario}!! \n
    Por favor, ingrese ingrese la opcion que desea realizar \n
    1. Nuevo paciente \n
    2. Autorizaciones \n
    3. Listar \n
    4. Eliminar \n
    5. Consultar \n
    6. Salir`);
}

function choisePedido() {
    pedido = +(prompt(`¿Que desea autorizar? (Ingrese el numero segun corresponda) \n 1. Cirugia \n 2. RMN/TAC \n 3. Ecodoppler \n 4. Hemodinamia - Cateterismo \n 5. Gastroenterologia \n 6. Electroencefalograma / Electromiografia \n 7. Radiografias / Electrocardiograma / Laboratorios / Consulta`));
}

function logIn(){
    usuario = prompt("Por favor, ingresa tu nombre");
    usuario = usuario.toUpperCase();
}

function carga(arrayDestino, objeto){
    arrayDestino.push(objeto);
}

function listarArray(a){
    console.log(a);
}

function Listar(a){
    a.forEach(function(e){
        console.log(e);
    });
}

function eliminar(a, key, buscado){
    a.forEach(function(key,index){
        if (key.dni == buscado){
            arrayPacientes.splice(index,1);
            // console.log(`El paciente ${key.fullName} con dni: ${key.dni}; ha sido eliminado`);
        }
    })
}

function consultar (a, parametro){
    let index = a.findIndex( (e) => e.dni == parametro);
    if (index != -1 ){
        console.log(`Su busqueda arrojo el siguiente resultado`)
        console.log(a[index]);
    } else if (index == -1){
        console.log("No se encontro el paciente");
        alert("No se encontro el paciente");
    }
}


function buscar(a, key, parametro){
    let buscado = a.some(e => e.key = parametro);
    if (buscado == true) {
        console.log(`El paciente que busca existe`);
    } else if (buscado == false){
        console.log(`El paciente que busca no existe`);
    }
}


// function incremento(idPaciente) {
//     return idPaciente++;
// }

function autogestion() {
    // logIn();
    requestEntry();
    // opcion = opcion.toLowerCase();

    while (opcion != "6") {
        if (opcion == "1") {
            alert(`Por favor, ingrese los datos del nuevo paciente que desea cargar.`);
            nombre = prompt("Nombre del paciente:");
            apellido = prompt("Apellido del paciente:");
            namePatient = `${apellido}, ${nombre}.`
            namePatient = namePatient.toUpperCase();
            dni = prompt("DNI / LC / LE:");
            obraSocial = prompt("Obra social del paciente, si no tiene deje el campo vacio");
            obraSocial = obraSocial.toUpperCase();
            idPaciente = idPaciente + 1;
            const pacienteNuevo = new Paciente(namePatient, dni, obraSocial, idPaciente); //* asigna el nuevo paciente mediante la creacion del objeto definido
            carga(arrayPacientes, pacienteNuevo);
            console.log(`El nuevo paciente ha sido cargado con el numero ${idPaciente} \n Paciente: ${namePatient} \n Obra Social: ${obraSocial} \n D.N.I: ${dni}`)
            alert(`El nuevo paciente ha sido cargado con el numero ${idPaciente} \n Paciente: ${namePatient} \n Obra Social: ${obraSocial} \n D.N.I: ${dni}`);
            console.log(`Se cargó con exito el objeto ${pacienteNuevo.fullName}, id: ${pacienteNuevo.id}`); //* si se muestra en consola si cargo correctamente
            listarArray(arrayPacientes);
            requestEntry();
        } else if (opcion == "2") {
            let autorizacionOpcion = prompt(`Elija la opcion segun corresponda \n 1. PAMI \n 2. IOSPER \n 3. Otra obra social`);
            autorizacionOpcion = autorizacionOpcion.toLowerCase();
            if (autorizacionOpcion == "1" || autorizacionOpcion == "pami") {
                alert(`Por favor, ingrese los datos solicitados.`);
                nombre = prompt("Nombre del paciente:");
                apellido = prompt("Apellido del paciente:");
                namePatient = `${apellido}, ${nombre}.`
                namePatient = namePatient.toUpperCase();
                dni = prompt("DNI / LC / LE:");
                obraSocial = "PAMI";
                choisePedido();
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
                    default:
                        while (pedido < 1 || pedido > 7) {
                        alert("Por favor, ingrese una opcion valida");
                        choisePedido();
                        }
                }
                idTramite = idTramite + 1;
                const pedidoNuevo = new Pedidos(namePatient, dni, obraSocial, pedido, idTramite);
                carga(arrayPedidos, pedidoNuevo);
                alert(`El nuevo pedido ha sido cargado con el número ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social: ${obraSocial} \n Pedido: ${pedido}`);
                console.log(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social: ${obraSocial} \n Pedido: ${pedido}`);
                console.log(`Se cargó con exito el objeto ${pedidoNuevo.fullName}, id: ${pedidoNuevo.id}`); //* si se muestra en consola si cargo correctamente
                listarArray(arrayPedidos);
                requestEntry();
            } else if (autorizacionOpcion == "2" || autorizacionOpcion == "iosper") {
                alert(`Por favor, ingrese los datos solicitados.`);
                nombre = prompt("Nombre del paciente:");
                apellido = prompt("Apellido del paciente:");
                namePatient = `${apellido}, ${nombre}.`
                namePatient = namePatient.toUpperCase();
                dni = prompt("DNI / LC / LE:");
                obraSocial = "IOSPER";
                pedido = "CIRUGIA";
                idTramite = idTramite + 1;
                const pedidoNuevo = new Pedidos(namePatient, dni, obraSocial, pedido, idTramite);
                carga(arrayPedidos, pedidoNuevo);
                alert(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social; ${obraSocial} \n Pedido: ${pedido}`);
                console.log(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social; ${obraSocial} \n Pedido: ${pedido}`);
                listarArray(arrayPedidos);
                requestEntry();
            } else if (autorizacionOpcion == "3" || autorizacionOpcion == "otra"){
                alert(`Por favor, ingrese los datos solicitados.`);
                nombre = prompt("Nombre del paciente:");
                apellido = prompt("Apellido del paciente:");
                namePatient = `${apellido}, ${nombre}.`
                namePatient = namePatient.toUpperCase();
                dni = prompt("DNI / LC / LE:");
                obraSocial = prompt("Obra Social");
                obraSocial = obraSocial.toUpperCase();
                pedido = "CIRUGIA";
                idTramite = idTramite + 1;
                const pedidoNuevo = new Pedidos(namePatient, dni, obraSocial, pedido, idTramite);
                carga(arrayPedidos, pedidoNuevo);
                alert(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social; ${obraSocial} \n Pedido: ${pedido}`);
                console.log(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social; ${obraSocial} \n Pedido: ${pedido}`);
                listarArray(arrayPedidos);
                requestEntry();
            } else {
                alert("Los datos ingresados no son validos. Por favor, ingrese nuevamente");
                requestEntry();
            }
        } else if (opcion == "3") { // listar
            let arr = prompt(`Elija el numero de la opcion segun corresponda \n 1. Listar pacientes \n 2. Listar pedidos`);
            if (arr == "1") {
                console.log(`Listado de pacientes:`);
                Listar(arrayPacientes);
                requestEntry();
            } else if (arr == "2") {
                console.log(`Listado de pedidos:`);
                Listar(arrayPedidos);
                requestEntry();
            }
        } else if (opcion == "4") { // eliminar
            let buscado = prompt(`Elija el numero de la opcion segun corresponda \n 1. Eliminar pacientes \n 2. Eliminar pedidos`);
            if (buscado == "1") {
                buscado = prompt("Ingrese el DNI del paciente. Tenga en cuenta que esta accion no se puede deshacer.");
                // falta agregar pedido de confirmacion (si/no)
                eliminar(arrayPacientes, Paciente, buscado);
                console.log(`El paciente ha sido eliminado.`);
                alert(`El paciente ha sido eliminado.`);
                requestEntry();
            } else if (buscado == "2") {
                buscado = prompt("Ingrese el DNI del paciente. Tenga en cuenta que esta accion no se puede deshacer.");
                // falta agregar pedido de confirmacion (si/no)
                eliminar(arrayPedidos, Pedidos, buscado);
                console.log(`El pedido ha sido eliminado.`);
                alert(`El pedido ha sido eliminado.`);
                requestEntry();
            }
        } else if (opcion == "5") { // consultar por dni
            let buscado = prompt (`Por favor, ingrese el DNI del paciente que desea consultar`);
            consultar(arrayPacientes, buscado);
            requestEntry();
            // buscar(arrayPacientes, dni, buscado);
        } else if (opcion<"1" || opcion>"6"){
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
/*
// listar pacientes

arrayPacientes.forEach(function(Paciente){
    console.log(Paciente);
});

// listar pedidos

arrayPedidos.forEach(function(Pedidos){
    console.log(Pedidos);
});


// eliminar paciente

let buscado = "36104562";
arrayPacientes.forEach(function(Paciente,index){
    if (Paciente.dni == buscado){
        arrayPacientes.splice(index,1);
        console.log(`El paciente ${Paciente.fullName} con dni: ${Paciente.dni}; ha sido eliminado`);
    }
}) //* ¿deberia reasignar los id del paciente? id = id - 1??


arrayPacientes.forEach(function(Paciente){
    console.log(Paciente);
});
// (Paciente.dni == "12345678"){
//     arrayPacientes.splice(arrayPacientes.indexOf(Paciente), 1);
//         console.log(`El paciente ${Paciente.fullName} ha sido eliminado`);

// eliminar pedido

arrayPedidos.forEach(function(Pedidos,index){
    if (Pedidos.dni == buscado){
        arrayPedidos.splice(index,1);
        console.log(`El paciente ${Pedidos.fullName} con dni: ${Pedidos.dni}; ha sido eliminado`);
    }
}) //* ¿deberia reasignar los id de los pedidos? id = id - 1??
*/

buscar(arrayPacientes, dni, "36104562");

console.log("otro metodo de busqueda");
console.log(arrayPacientes.some(buscado => buscado.dni == "12345678"));

