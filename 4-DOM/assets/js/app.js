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
        let nuevoPaciente = document.createElement("li")
        nuevoPaciente.classList.add('list-group-item')
        nuevoPaciente.innerHTML = `<h4>Nombre y Apellido: ${nombre}, ${apellido}.</h4>
                                    <p>DNI: ${dni}</p>
                                    <p>Obra Social: ${obraSocial}</p>`

        listaPacientes.append(nuevoPaciente);

    } else if (confirmacion == "n" || confirmacion == "N") {
        alert(`Carga cancelada!`)
    }
}

