    var listElement = document.querySelector('ul#todo');
    var todos = document.querySelector('input#texto');
    var botao = document.querySelector('button#botao')

    var lista = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos(){
    listElement.innerHTML = '';
    for(i of lista){
        var liElement = document.createElement('li');
        var pos = lista.indexOf(i);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTodos(' + pos + ')')
        linkElement.appendChild(document.createTextNode(' Excluir'));

        liElement.appendChild(document.createTextNode(i));
        liElement.appendChild(linkElement);

        listElement.appendChild(liElement);
        
    }
}

function adicionar(){    
    lista.push(todos.value)
    todos.value = '';
    todos.focus();
    renderTodos();
    saveToStorage();
}

botao.onclick = adicionar;

function deleteTodos(pos){
    lista.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(lista))
}
