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
}

function listarArray(a) {
    console.log(a);
}

function resetForm() {
    alert(`Formulario reseteado!`);
}

document.getElementById("formPedidos").addEventListener("reset", resetForm);



// si selectObraSocial es distinto de "pami", agregar la clase "d-none" a las clases "selectOption"
let obraSocialSeleccionada = document.getElementById("selectObraSocial").value
let opcionDisponible = document.getElementsByClassName("selectOption");

obraSocialSeleccionada.addEventListener("change", function () {
    if (obraSocialSeleccionada === "PAMI") {
        // opcionDisponible.classList.remove("d-none");
        opcionDisponible.classList.toggle("d-none");
    } /*else {
        opcionDisponible.classList.add("d-none");
    }*/
});

// Todo: OTRO METODO????

obraSocialSeleccionada.onchange = () => {
    if (obraSocialSeleccionada === "PAMI") {
        // opcionDisponible.classList.remove("d-none");
        opcionDisponible.classList.toggle("d-none");
    } /*else {
        opcionDisponible.classList.add("d-none");
    }*/
};




// let selectElement = document.getElementById('selectObraSocial');
// selectElement.addEventListener('change', (event) => {
//     // si la obra social es pami, se crea una etiqueta select con los tipos de pedidos, si no, pedido="cirugia"
//     if (event.target.value === "pami") {
//         let selectPedido = document.getElementById('selectPedido');
//         const theLabel = document.createElement('label');
//         const theSelect = document.createElement('select');
//         theSelect.classList.add(`form-select`);
//         const theOptions = document.innerHTML(`<option>Consulta</option>
//                                                     <option>Cirugia</option>
//                                                     <option>RX</option>
//                                                     <option>RMN - TAC</option>
//                                                     <option>EEG - EMG</option>
//                                                     <option>ECOGRAFIA - ECODOPPLER</option>`);
//         selectPedido.appendChild(theSelect);
//         selectPedido.appendChild(theLabel);
//         theSelect.appendChild(theOptions);
//         // theSelect.appendChild(theOptions);

//     } else if (event.target.value == "otro") {
//         let selectPedido = document.getElementById('selectPedido');
//         selectPedido.innerHTML = `<option value="cirugia">Cirugia</option>`;
//     }
// });

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

    let confirmacion = prompt(`¿Esta seguro de que desea cargar el nuevo paciente? \n Presione Y/N`)

    if (confirmacion == "y" || confirmacion == "Y") {
        idPaciente = idPaciente + 1;
        const pacienteNuevo = new Paciente(namePatient, dni, obraSocial, idPaciente); //* asigna el nuevo paciente mediante la creacion del objeto definido
        carga(arrayPacientes, pacienteNuevo);
        console.log(`El nuevo paciente ha sido cargado con el numero ${idPaciente} \n Paciente: ${namePatient} \n Obra Social: ${obraSocial} \n D.N.I: ${dni}`)
        alert(`El nuevo paciente ha sido cargado con el numero ${idPaciente} \n Paciente: ${namePatient} \n Obra Social: ${obraSocial} \n D.N.I: ${dni}`);
        console.log(`Se cargó con exito el objeto ${pacienteNuevo.fullName}, id: ${pacienteNuevo.id}`); //* si se muestra en consola si cargo correctamente
        listarArray(arrayPacientes);


        let nuevoPaciente = document.createElement("li")
        nuevoPaciente.classList.add('list-group-item')
        nuevoPaciente.innerHTML = `<h4>Nombre y Apellido: ${nombre}, ${apellido}.</h4>
                                    <p>DNI: ${dni}</p>
                                    <p>Obra Social: ${obraSocial}</p>`

        document.addEventListener('DOMContentLoaded', function () {
            let formulario = document.getElementById('formul');
            formulario.addEventListener('submit', function () {
                formulario.reset();
            });
        });

        listaPacientes.append(nuevoPaciente);

    } else if (confirmacion == "n" || confirmacion == "N") {
        console.log(`Carga cancelada!`)
        alert(`Carga cancelada!`)
    }
}

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
    // pedido = pedido.toUpperCase();



    let confirmacion = prompt(`¿Esta seguro de que desea cargar el nuevo pedido? \n Presione Y/N`)

    if (confirmacion == "y" || confirmacion == "Y") {
        idTramite = idTramite + 1;
        const pedidoNuevo = new Pedidos(namePatient, dni, obraSocial, pedido, idTramite);
        carga(arrayPedidos, pedidoNuevo);
        alert(`El nuevo pedido ha sido cargado con el número ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social: ${obraSocial} \n Pedido: ${pedido}`);
        console.log(`El nuevo pedido ha sido cargado con el numero ${idTramite} \n Paciente: ${namePatient} \n D.N.I: ${dni} \n Obra social: ${obraSocial} \n Pedido: ${pedido}`);
        console.log(`Se cargó con exito el objeto ${pedidoNuevo.fullName}, id: ${pedidoNuevo.id}`); //* si se muestra en consola si cargo correctamente
        listarArray(arrayPedidos);

        let nuevoPedido = document.createElement("li")
        nuevoPedido.classList.add('list-group-item')
        nuevoPedido.innerHTML = `<h4>Nombre y Apellido: ${nombre}, ${apellido}.</h4>
                                    <p>DNI: ${dni}</p>
                                    <p>Obra Social: ${obraSocial}</p>
                                    <p>Pedido: ${pedido}</p>
                                    <p>ID: ${idTramite}</p>`

        document.addEventListener('DOMContentLoaded', function () {
            let formulario = document.getElementById('formul');
            formulario.addEventListener('submit', function () {
                formulario.reset();
            });
        });

        listaPedidos.append(nuevoPedido);

    } else if (confirmacion == "n" || confirmacion == "N") {
        console.log(`Carga cancelada!`)
        alert(`Carga cancelada!`)
    }
}

