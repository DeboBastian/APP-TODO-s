

// function addTarea(Listatareas, pNewTarea) {
    
//     let existe = pEmployeeList.some(employee => employee.email === pEmployee.email)

//     if (!existe) {
//         pEmployee.id = ID;
//         pEmployeeList.push(pEmployee);
//         ID++;
//         console.log(pEmployeeList);
//         return { status: true, msg: "" }
//     } else {
//         return { status: false, msg: "Usuario duplicado" }
//     }

// }



 function deleteTarea(pListTareas, pId) {

    let posicion = pListTareas.findIndex(tarea => tarea.id === pId);
   if (posicion !== -1) {
        pListTareas.splice(posicion, 1);
         return { status: true, msg: 'Tarea borrada correctamente' }
    }
     return { status: false, msg: 'No se ha podido borrar la tarea' }
 }

// deleteTarea(Listatareas, parseInt(1))
