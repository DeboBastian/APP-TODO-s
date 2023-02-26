

const sectionTareas = document.querySelector('#tareas');
const guardar = document.querySelector('#guardar');
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

// REVISAR NO HAY TAREAS QUE MOSTRAR - NO FUNCIONA

function pintOneTarea(pTarea, pDom) {

    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const button = document.createElement('button');
    const hr = document.createElement('hr');

    article.classList.add`${pTarea.prioridad}`;
    h3.innerHTML = `${pTarea.nombre}`;
    button.innerHTML = 'BORRAR';
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
    let idBorrar = event.target.id;
    let result = deleteTarea(Listatareas, idBorrar);
    if (result) {
        event.target.parentNode.remove();
        alert('Tarea borrada correctamente')
    } else {
        alert('Fallo al borrar la tarea')
    }
}

//removeTarea()




inputSearch.addEventListener('input', busqueda)


function busqueda(event) {
    event.preventDefault();

    let letra = event.target.value;
    let listaFiltrada = busquedaTarea(Listatareas, letra);
    if (listaFiltrada.length === 0) {
        alert('No se encontraron resultados')
    } else {
        printTareas(listaFiltrada, sectionTareas)
    }

}




addTarea.addEventListener('submit', getDataForm)

function getDataForm(event) {
    event.preventDefault();


    let nombre = event.target.new.value;
    let prioridad = event.target.priority.value

    let result = NewTarea(Listatareas, nombre, prioridad);
    if (result) {
        alert('Tarea agregada correctamente')
    } else {
        alert('Fallo al agregar la tarea')
    }


}

//getDataForm()