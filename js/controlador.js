
//BORRAR TAREAS

const deleteTarea = (pListTareas, pId) => {
    if (pListTareas.findIndex(tarea => tarea.id === parseInt(pId)) !== -1) {
        pListTareas.splice(pListTareas.findIndex(tarea => tarea.id === parseInt(pId)), 1);
        return true;
    }
    return false;
}
// deleteTarea(Listatareas, parseInt(1))


//BUSCAR TAREAS

const busquedaTarea = (pListTareas, pLetra) => pListTareas.filter(tarea => tarea.nombre.toLowerCase().includes(pLetra.toLowerCase()));

//console.log(busquedaTarea(Listatareas, 'e'))


//filtrar tareas por prioridad
const filterByPriority = (pListTareas, pPrioridad) => pListTareas.filter(tarea => tarea.prioridad.includes(pPrioridad));