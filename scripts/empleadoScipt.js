//Variables globales
const API_URL = "http://localhost:8081/"
let globalData = {};

//Eventos de los botones
const onclickSubmitEmpleado = () => {
    // postEmpleado(getData());
    console.table(getData());
}



// Obtener información del form
const getData = () => {
    const idpersonal = document.getElementById("IDPersonalInput").value;
    const nom_personal = document.getElementById("NombreInput").value;
    const apellido1_personal = document.getElementById("PrimerApellidoInput").value;
    const apellido2_personal = document.getElementById("SegundoApellidoInput").value;
    const fechanacimiento_personal = document.getElementById("FechaNacimientoInput").value;
    const telefono_usuario = document.getElementById("TelefonoInput").value;


    let objetoForm = {
        idpersonal,
        idCargo: 1,
        idSede: 1,
        nom_personal,
        apellido1_personal,
        apellido2_personal,
        fechanacimiento_personal,
        telefono_usuario
    }

    return objetoForm;
}

//Mostrarlos en una tabla
const getPersonalTable = () => {
    let tablePersonal = document.getElementById('tablePersonal');

    console.log(globalData);

    globalData.forEach(empleado => {
        tablePersonal.innerHTML += `
        <tr>
            <td>${empleado.idpersonal}</td>
            <td>${empleado.nom_personal}</td>
        </tr>
        `
    });
    console.log(tablePersonal);
}

//Metodos para consumir el endpoint
//GET
const getAll = async () => {
    const response = await fetch(API_URL + "Personal/getPersonal", {
        method: 'GET',
        redirect: 'follow',
    });
    const data = await response.json();
    // console.log(data);

    globalData = data;

}

//POST
const postEmpleado = async (objetoEmpleado) => {
    const response = await fetch(API_URL + "Personal/save", {
        method: 'POST',
        body: JSON.stringify(objetoEmpleado),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

//POST sede
const postSede = async () => {
    const objeto = {
        idsede: "3",
        nom_sede: 'Macarena',
        direccion_sede: 'Cll algo con algo'
    }

    const response = await fetch(API_URL + "Sede/save", {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);

}

getAll();