const adicionarTarefa = document.querySelector('#novaTarefa');
const caixaDeTarefas = document.querySelector('.caixaDeTarefas');
const btnDelete = document.querySelector('.task button');

adicionarTarefa.addEventListener('click', add);



function add(e){
    const inputInserirTarefa = document.querySelector('#escreveTarefa').value;
    e.preventDefault();
    if(inputInserirTarefa != ''){

        const itemDaLista = document.createElement('div');
        itemDaLista.classList.add('task');
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        
        const descricaoTarefa = document.createElement('p');
        descricaoTarefa.innerText = inputInserirTarefa;
        
        const botaoDelete = document.createElement('button');
        
        
        const imagemLixeira = document.createElement('i');
        imagemLixeira.classList.add('fa-solid');
        imagemLixeira.classList.add('fa-trash');
        
        
        caixaDeTarefas.appendChild(itemDaLista);
        itemDaLista.appendChild(input);
        itemDaLista.appendChild(descricaoTarefa);
        itemDaLista.appendChild(botaoDelete);
        botaoDelete.appendChild(imagemLixeira);
        
        input.addEventListener('click', tarefaCompleta)
        botaoDelete.addEventListener('click', deletaTarefa);
        
        document.querySelector('#escreveTarefa').value = '';
    }

}

function deletaTarefa(e){
    e.target.parentElement.parentElement.remove()
}

function tarefaCompleta(e) {
    e.target.parentElement.classList.toggle('checkBoxMarcado')
}
/* de primeiro momento só deixei funcional. Da pr ver pela quantidade de código  que dá para deixar o código mais enxuto através de funções, mais pr frente a intenção é fazer isso, pois todolist é um bom tema para projeto de portifólio*/