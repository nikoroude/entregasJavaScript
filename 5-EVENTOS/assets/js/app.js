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

const selectElement = document.querySelector('#selectObraSocial');
selectElement.addEventListener('change', (event) => {
    // si la obra social es pami, se crea una etiqueta select con los tipos de pedidos, si no, pedido="cirugia"
    if (event.target.value = "pami") {
        let selectPedido = document.querySelector('#selectPedido');
        selectPedido.createElement("label");
        selectPedido.createElement("select");
        selectPedido.classList.add('form-select');
        selectPedido.innerHTML = `<option>Cirugia</option>
                                    <option>Consulta</option>
                                    <option>Laboratorio</option>`;
    } else {
        let selectElement = document.querySelector('#selectPedido');
        selectElement.innerHTML = `<option value="cirugia">Cirugia</option>`;
    }
});

const cargarPaciente = () => {
    let listaPacientes = document.getElementById("list__pacientes")
    let nombre = document.getElementById("formNombre").value;
    let apellido = document.getElementById("formApellido").value;
    let dni = document.getElementById("formDni").value;
    let obraSocial = document.getElementById("formObraSocial").value;

    nombre = nombre.toUpperCase();
    apellido = apellido.toUpperCase();
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
        // requestEntry();

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
    let listaPacientes = document.getElementById("list__pedidos")
    let nombre = document.getElementById("formNombre").value;
    let apellido = document.getElementById("formApellido").value;
    let dni = document.getElementById("formDni").value;
    let obraSocial = document.getElementById("formObraSocial").value;

    nombre = nombre.toUpperCase();
    apellido = apellido.toUpperCase();
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
        // requestEntry();

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

