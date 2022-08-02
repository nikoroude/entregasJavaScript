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
let userName;
let typeUser;
let password;
let paciente; //* variable que se ingresa como objeto Paciente, luego se carga en array pacientesList

// ! Arrays

let arrayPacientes = [];

let arrayPedidos = [];

let arrayUsers = [];

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

class Usuario {
    constructor(userName, password) {
        this.user = userName;
        this.pass = password;
    }
}

// ! Declaracion de funciones

function registro() {
    let user = document.getElementById("registroUsername").value;
    let password = document.getElementById("registroPassword").value;
    let repeatPassword = document.getElementById("repeatPassword").value;
    let confirmacion = true;
    console.log('toma datos ok')
    confirmacion = password == repeatPassword && cargaUsuarios(arrayUsers, user, password);

    (confirmacion !== true) ? mensjError('Las contraseñas no coinciden') : location.href = "https://nikoroude.github.io/entregasJavaScript/6-OPTIMIZACION-OP_AVANZADOS/assets/pages/admin.html";
}

function cargaUsuarios(arrayDestino, user, password) {
    const nuevoUsuario = new Usuario(user, password);
    arrayDestino.push(nuevoUsuario);
    let arrayJSON = JSON.stringify(arrayDestino);
    localStorage.setItem("listaUsuariosStorage", arrayJSON);
}

function login() {
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userArray = JSON.parse(localStorage.getItem("listaUsuariosStorage"));

    if ((userArray.length == 0)) {
        mensjError('No hay usuarios registrados');
    } else if ((user === null) || (password === null)) {
        mensjError('No se ingreso ningun usuario o contraseña');
    } else {
        for (let i = 0; i <= userArray.length; i++) {
            (userArray[i].user == user && userArray[i].pass === password) ? location.href = "https://nikoroude.github.io/entregasJavaScript/6-OPTIMIZACION-OP_AVANZADOS/assets/pages/admin.html" : mensjError('Usuario o contraseña incorrectos');
        }
    }
}

function mensjError(mensaje) {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    const alert = (mensaje) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-danger alert-dismissible" role="alert">`,
            `   <div>${mensaje}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            alert('Nice, you triggered this alert message!', 'success')
        })
    }
}

function cargaExitosa() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La carga a sido realizada con éxito!!',
        showConfirmButton: false,
        timer: 1500
    })
}

//? carga pacientes o pedidos

function carga(arrayDestino, objeto) {
    arrayDestino.push(objeto);
    let arrayJSON = JSON.stringify(arrayDestino);
    (arrayDestino === arrayPacientes) ? localStorage.setItem("listaPacientesStorage", arrayJSON) : localStorage.setItem("listaPedidosStorage", arrayJSON)
}

function printAll(key) {
    for (let i = 0; i <= key.length; i++) {
        const divDestino = document.getElementById('admin-pacientes');
        divDestino.innerHTML = `<p>Paciente: ${key[i].fullName}</p>
                                <p>DNI: ${key[i].dni}</p>
                                <p>Obra Social: ${key[i].obraSocial}</p>
                                <p>ID: ${key[i].id}</p>`;
    }
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


    let nuevoPaciente = document.createElement("li")
    nuevoPaciente.classList.add('list-group-item')
    nuevoPaciente.innerHTML = `<h4>Nombre y Apellido: ${nombre}, ${apellido}.</h4>
                                    <p>DNI: ${dni}</p>
                                    <p>Obra Social: ${obraSocial}</p>`

    let formulario = document.getElementById('formPacientes');
    formulario.addEventListener('carga', function () {
        formulario.reset();
    });


    //! fetch

    const cargarElemento = () => {
        let feed = document.getElementById('feedHistorial');
        const data = {
            title: `${nombre}, ${apellido}`,
            body: `${dni}`,
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        })
            .then(response => response.json())
            .then((data) => {
                feed.innerHTML = `<p class="text-black text-bold">El paciente ${data.title} - ${data.body}, fue cargado con exito!</p>`
            })
    }

    cargarElemento();

    //! cartel de confirmacion de envio de pedido

    setTimeout(cargaExitosa, 2000);

    listaPacientes.append(nuevoPaciente);  //! agrega el nuevo paciente al listado en el html
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

    //! fetch

    const cargarElemento = () => {
        let feed = document.getElementById('feedHistorial');
        const data = {
            title: `${nombre}, ${apellido}`,
            body: `${pedido}`,
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        })
            .then(response => response.json())
            .then((data) => {
                feed.innerHTML = `<p class="text-black text-bold">El pedido del paciente ${data.title} para ${data.body}, fue cargado con exito!</p>`
            })
    }

    cargarElemento();

    //! cartel de confirmacion de envio de pedido
    setTimeout(cargaExitosa, 2000);

    listaPedidos.append(nuevoPedido);
}

