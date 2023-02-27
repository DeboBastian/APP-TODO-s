

const sectionTareas = document.querySelector('#tareas');
const guardar = document.querySelector('#save');
const inputSearch = document.querySelector('#formSearch');
const addTarea = document.querySelector('#newToDo');



function printTareas(pListTareas, pSectionDom) {

    pSectionDom.innerHTML = '';
    if (pListTareas.length > 0) {

        pListTareas.forEach(tarea => pintOneTarea(tarea, pSectionDom))
        return true;
    }
    pSectionDom.innerHTML = "<h2>No hay tareas que mostrar</h2>";
    return false;
}

// REVISAR NO HAY TAREAS QUE MOSTRAR - NO FUNCIONA CUANDO HACEMOS EL BORRADO DE TODAS LAS TAREAS, si es por busqueda semantica si 

function pintOneTarea(pTarea, pDom) {

    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const button = document.createElement('button');
    const hr = document.createElement('hr');

    article.classList.add`${pTarea.prioridad}`;
    h3.innerHTML = `${pTarea.nombre}`;
    button.innerHTML = 'BORRAR';
    button.dataset.id = pTarea.id;
    hr.innerHTML = '<hr>';
    // HR NO FUNCIONA

    button.addEventListener('click', removeTarea);

    article.appendChild(h3);
    article.appendChild(button);
    article.appendChild(hr);
    pDom.appendChild(article);

}

printTareas(Listatareas, sectionTareas)

// REVISAR EVENT . MARCA UNDEFINED

function removeTarea(event) {
    let idBorrar = event.target.dataset.id;
    let result = deleteTarea(Listatareas, idBorrar);
    if (result.status) {
        event.target.parentNode.remove();
        alert('Tarea borrada correctamente')
    } else {
        alert('Fallo al borrar la tarea')
    }
    if (Listatareas.length === 0) {
        sectionTareas.innerHTML = "<h2>No hay tareas que mostrar</h2>";
    }

}

//removeTarea()



inputSearch.addEventListener('input', busqueda)


function busqueda(event) {
    event.preventDefault();

    let letra = event.target.value;
    let listaFiltrada = busquedaTarea(Listatareas, letra);

    printTareas(listaFiltrada, sectionTareas)


}


addTarea.addEventListener('submit', saveTarea)
function saveTarea(event) {
    event.preventDefault();

    if (event.target.new.value !== "" && event.target.priority.value !== "") {

        const newTarea = {
            id: idGlobal,
            nombre: event.target.new.value,
            prioridad: event.target.priority.value
        }
        idGlobal++;
        Listatareas.push(newTarea);
        pintOneTarea(newTarea, sectionTareas)
        alert('Tarea agregada correctamente')
    } else {
        alert('Faltan datos')
    }

}