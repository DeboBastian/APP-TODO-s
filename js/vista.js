

const sectionTareas = document.querySelector('#tareas');
const borrar = document.querySelectorAll('button');



function printTareas(pListTareas, pSectionDom) {

  pSectionDom.innerHTML = '';
     pListTareas.forEach(tarea => pintOneTarea(tarea, pSectionDom))

}


function pintOneTarea(pTarea, pDom) {

    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const button = document.createElement('button');
    const hr = document.createElement('hr');

    article.classList.add`${pTarea.prioridad}`;
    h3.innerHTML = `${pTarea.nombre}`;
    button.innerHTML = 'BORRAR';
    hr.innerHTML = '<hr>';

    button.addEventListener('click', removeTarea);
    // button.dataset.id = pTarea.id;

    article.appendChild(h3);
    article.appendChild(button);
    article.appendChild(hr);
    pDom.appendChild(article);
    
}

printTareas(Listatareas, sectionTareas)



function removeTarea(event) {
  let idBorrar = parseInt(event.target.dataset.id);
let result = deleteTarea(Listatareas, idBorrar);
  if (result){
    event.target.parentNode.remove();
    alert('Tarea borrada correctamente')
}else {
        alert('Fallo al borrar la tarea')
  }
}

removeTarea()