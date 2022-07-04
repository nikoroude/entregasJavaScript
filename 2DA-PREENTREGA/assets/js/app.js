// ! Declaracion de variables

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
    constructor(fullName, dni, obraSocial = "SIN OBRA SOCIAL", id) {
        this.fullName = namePatient;
        this.dni = dni;
        this.obraSocial = obraSocial;
        this.id = idPaciente;
    }
}

class Pedidos {
    constructor(fullName, dni, obraSocial, pedido, id) {
        this.fullName = namePatient;
        this.dni = dni;
        this.obraSocial = obraSocial;
        this.pedido = pedido;
        this.id = idTramite;
    }
}


// ! Declaracion de funciones

function carga(arrayDestino, objeto) {
    arrayDestino.push(objeto);
    let arrayJSON = JSON.stringify(arrayDestino);
    (arrayDestino === arrayPacientes) ? localStorage.setItem("listaPacientesStorage", arrayJSON) : localStorage.setItem("listaPedidosStorage", arrayJSON)
}

function printAll(key) {
    let array = JSON.parse(localStorage.getItem(key));
    console.log(array);
    alert(array);
}

function printPaciente(P) {
    console.log(`Busqueda exitosa: `, P);
    let destino = document.getElementById('destinoResult')
    destino.innerHTML = `<p>Paciente: ${P.fullName}</p>
                        <p>DNI: ${P.dni}</p>
                        <p>Obra Social: ${P.obraSocial}</p>
                        <p>Número ID: ${P.id}</p>`;
}

function printPedido(P) {
    console.log(`Busqueda exitosa: `, P);
    let destino = document.getElementById('destinoResult')
    destino.innerHTML = `<p>Paciente: ${P.fullName}</p>
                        <p>DNI: ${P.dni}</p>
                        <p>Obra Social: ${P.obraSocial}</p>
                        <p>Pedido: ${P.pedido}</p>
                        <p>Número de trámite: ${P.id}</p>`;
}

function noExiste() {
    destino = document.getElementById('destinoResult');
    destino.innerHTML = `<p>El paciente que busca no existe en los registros!</p>`;
}

function listarArray(a) {
    console.log(a);
}

// function resetForm() {
//     alert(`Formulario reseteado!`);
// }

// document.getElementById("formPedidos").addEventListener("reset", resetForm);


//! buscar en localStorage el paciente que tenga dni === dniTarget, si existe abre modal con los datos del paciente, sino muestra mensaje de que no existe

const buscarPaciente = () => {
    let dniTarget = document.getElementById("dniTarget").value;
    let array = JSON.parse(localStorage.getItem("listaPacientesStorage"));
    let existe = false;
    let encontrado;
    for (let i = 0; i <= array.length; i++) {
        if (array[i].dni === dniTarget) {
            existe = true;
            encontrado = array[i];
            printPaciente(encontrado)
            break;
        } else if (existe === false) {
            noExiste();
        }
    }
    // (existe == false) ? alert(`El paciente que busca no existe en los registros!`) : printPaciente(encontrado);
}

const buscarPedido = () => {
    let pedidoTarget = document.getElementById("pedidoTarget").value;
    let array = JSON.parse(localStorage.getItem("listaPedidosStorage"));
    let existe = false;
    let encontrado;
    for (let i = 0; i <= array.length; i++) {
        if (array[i].dni === pedidoTarget) {
            existe = true;
            encontrado = array[i];
            printPedido(encontrado)
            break;
        } else if (existe === false) {
            noExiste();
        }
    }
    // (existe == false) ? alert(`El paciente que busca no existe en los registros!`) : printPedido(encontrado);
}


//TODO-> CARGAR NUEVO PACIENTE
const cargarPaciente = () => {
    let listaPacientes = document.getElementById("list__pacientes")
    let nombre = document.getElementById("formNombre").value;
    let apellido = document.getElementById("formApellido").value;
    let dni = document.getElementById("formDni").value;
    let obraSocial = document.getElementById("formObraSocial").value;

    nombre = nombre.toUpperCase();
    apellido = apellido.toUpperCase();
    namePatient = `${apellido}, ${nombre}`;
    obraSocial = obraSocial.toUpperCase();


    idPaciente = idPaciente + 1;
    const pacienteNuevo = new Paciente(namePatient, dni, obraSocial, idPaciente); //* asigna el nuevo paciente mediante la creacion del objeto definido
    carga(arrayPacientes, pacienteNuevo);
    listarArray(arrayPacientes);
    //printAll("listaPacientesStorage");
    //resetForm();



    let nuevoPaciente = document.createElement("li")
    nuevoPaciente.classList.add('list-group-item')
    nuevoPaciente.innerHTML = `<h4>Nombre y Apellido: ${nombre}, ${apellido}.</h4>
                                    <p>DNI: ${dni}</p>
                                    <p>Obra Social: ${obraSocial}</p>`

    // document.addEventListener('DOMContentLoaded', function () {     //TODO *** no funciona, reveer el codigo
        let formulario = document.getElementById('formPacientes');
        formulario.addEventListener('carga', function () {
            formulario.reset();
        });
    // });

    // document.getElementById("formPacientes").addEventListener("reset")

    // listaPacientes.append(nuevoPaciente);  //! agrega el nuevo paciente al listado en el html
}

//TODO-> CARGAR NUEVO PEDIDO
const cargarPedido = () => {
    let listaPedidos = document.getElementById("list__pedidos")
    let nombre = document.getElementById("formPedidoNombre").value;
    let apellido = document.getElementById("formPedidoApellido").value;
    let dni = document.getElementById("formPedidoDni").value;
    let obraSocial = document.getElementById("selectObraSocial").value;
    let pedido = document.getElementById("selectPedido").value;


    nombre = nombre.toUpperCase();
    apellido = apellido.toUpperCase();
    namePatient = `${apellido}, ${nombre}`;
    obraSocial = obraSocial.toUpperCase();
    pedido = pedido.toUpperCase();


    idTramite = idTramite + 1;
    const pedidoNuevo = new Pedidos(namePatient, dni, obraSocial, pedido, idTramite); //* asigna el nuevo paciente mediante la creacion del objeto definido
    carga(arrayPedidos, pedidoNuevo);
    listarArray(arrayPedidos);

    let nuevoPedido = document.createElement("li")
    nuevoPedido.classList.add('list-group-item')
    nuevoPedido.innerHTML = `<h4>Nombre y Apellido: ${nombre}, ${apellido}.</h4>
                                    <p>DNI: ${dni}</p>
                                    <p>Obra Social: ${obraSocial}</p>
                                    <p>Pedido: ${pedido}</p>
                                    <p>ID: ${idTramite}</p>`

    document.addEventListener('DOMContentLoaded', function () {
        let formulario = document.getElementById('formPedidos');
        formulario.addEventListener('submit', function () {
            formulario.reset();
        });
    });

    //listaPedidos.append(nuevoPedido);
}

