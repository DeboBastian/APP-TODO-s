
//BORRAR TAREAS

function deleteTarea(pListTareas, pId) {

    let posicion = pListTareas.findIndex(tarea => tarea.id === parseInt(pId));
    if (posicion !== -1) {
        pListTareas.splice(posicion, 1);
        return { status: true, msg: 'Tarea borrada correctamente' }
    }
    return { status: false, msg: 'No se ha podido borrar la tarea' }
}

// deleteTarea(Listatareas, parseInt(1))



//BUSCAR TAREAS

function busquedaTarea(pListTareas, pLetra) {
    return pListTareas.filter(tarea => tarea.nombre.toLowerCase().includes(pLetra.toLowerCase()))

}

//console.log(busquedaTarea(Listatareas, 'e'))




//AÑADIR TAREAS

function NewTarea(pListTareas, pnombreTarea, pPrioridad) {
    let newTarea = {
        id: idGlobal,
        nombre: pnombreTarea,
        prioridad: pPrioridad
    }

    pListTareas.push(newTarea);
    idGlobal++;
    return newTarea
}


//NewTarea(Listatareas, 'poner lavadora', 'urgente')



//filtrar tareas por prioridad
const filterByPriority = (pListTareas, pPrioridad) => pListTareas.filter(tarea => tarea.prioridad.includes(pPrioridad));