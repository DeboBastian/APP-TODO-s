

const sectionTareas = document.querySelector('#tareas');

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

    article.appendChild(h3);
    article.appendChild(button);
    article.appendChild(hr);
    pDom.appendChild(article);
    
}

printTareas(Listatareas, sectionTareas)