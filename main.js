const adicionarTarefa = document.querySelector('#novaTarefa');
const caixaDeTarefas = document.querySelector('.caixaDeTarefas');

adicionarTarefa.addEventListener('click', add);

function add(){
    const inputInserirTarefa = document.querySelector('#escreveTarefa').value;
    event.preventDefault();

    const itemDaLista = document.createElement('div');
    itemDaLista.classList.add('task');
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    
    const descricaoTarefa = document.createElement('p');
    descricaoTarefa.innerText = inputInserirTarefa;

    
    caixaDeTarefas.appendChild(itemDaLista);
    itemDaLista.appendChild(input);
    itemDaLista.appendChild(descricaoTarefa);
    
}

