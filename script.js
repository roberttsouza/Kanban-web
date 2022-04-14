//função para adicionar um novo elemento(task) no DOM
function addnewtask(){
  const tTask = window.prompt("Informe o nove da sua nova TASK: ");
  const cTask = window.prompt("Informe o conteúdo da sua TASK: ");

  const novo_elemento = document.createElement('div'); //informando que o elemento será uma div
  novo_elemento.className = "tesk"; // atribuindo uma class para o elemento criado
  novo_elemento.id = "task1"; // atribuindo um id para o elemento criado
  novo_elemento.draggable = "true"; //add o atributo draggable para o elemento 
  novo_elemento.ondragstart; // ainda não descobrir como adribuir o ondragstart ao elemento
  novo_elemento.innerHTML = `${tTask}<br>${cTask}`; 

  const elemento = document.querySelector(".blocoContent"); // selecionando onde o elemento será criado
  elemento.appendChild(novo_elemento); //informado que o ele será criado após os elementos ja existentes

};

/** 
function allowDrop(ev){
  ev.preventDefault();
}

function drag(ev){
  ev.dataTransfer.setData("text/plain", ev.target.id);
}

function drop(ev){
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  ev.target.appendChild(document.getElementById(data));
}

*/