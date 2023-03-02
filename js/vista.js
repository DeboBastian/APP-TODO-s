

const sectionTareas = document.querySelector('#tareas');
const inputSearch = document.querySelector('#formSearch');
const addTarea = document.querySelector('#newToDo');

const busqueda = event => {
    event.preventDefault();
    let letra = event.target.value;
    printTareas(busquedaTarea(allTasks, letra), sectionTareas);
}


const removeTarea = event => {
    let idBorrar = event.target.dataset.id;
    if (deleteTarea(allTasks, idBorrar)) {
        event.target.parentNode.remove();
        localStorage.setItem('Storagetareas', JSON.stringify(allTasks));
        alert('Tarea borrada correctamente')
    } else {
        alert('Fallo al borrar la tarea')
    }
    if (allTasks.length === 0) {
        sectionTareas.innerHTML = "<h2>No hay tareas que mostrar</h2>";
    }
}


function printTareas(pListTareas, pSectionDom) {
    pSectionDom.innerHTML = '';
    if (pListTareas.length > 0) {
        pListTareas.forEach(tarea => pintOneTarea(tarea, pSectionDom))
        return true;
    }
    pSectionDom.innerHTML = "<h2>No hay tareas que mostrar</h2>";
    return false;
}


const pintOneTarea = (pTarea, pDom) => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const button = document.createElement('button');

    article.classList.add`${pTarea.prioridad}`;
    h3.innerHTML = `${pTarea.nombre}`;
    button.innerHTML = 'BORRAR';
    button.dataset.id = pTarea.id;

    button.addEventListener('click', removeTarea);

    article.appendChild(h3);
    article.appendChild(button);

    pDom.appendChild(article);
}
printTareas(allTasks, sectionTareas)


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
        localStorage.setItem('ultimoID', idGlobal);
        allTasks.push(newTarea);
        pintOneTarea(newTarea, sectionTareas)
        localStorage.setItem('Storagetareas', JSON.stringify(allTasks));
        alert('Tarea agregada correctamente')
    } else {
        alert('Faltan datos')
    }
    event.target.reset()
}


const priority = document.querySelector('#priority')
priority.addEventListener('change', prioridad)

function prioridad(event) {
    event.preventDefault();
    let prioridad = event.target.value;
    (prioridad !== "") ? printTareas(filterByPriority(allTasks, prioridad), sectionTareas) : printTareas(allTasks, sectionTareas)
}


inputSearch.addEventListener('input', busqueda)

function init() {
    if (localStorage.getItem('Storagetareas') === null) {
        localStorage.setItem('Storagetareas', JSON.stringify(allTasks));
    }
    if (localStorage.getItem('ultimoID') === null) {
        localStorage.setItem('ultimoID', idGlobal);
    }
    allTasks = JSON.parse(localStorage.getItem('Storagetareas'));
    idGlobal = parseInt(localStorage.getItem('ultimoID'));
    printTareas(allTasks, sectionTareas);
}

init();