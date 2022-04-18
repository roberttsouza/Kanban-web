//função para adicionar um novo elemento(task) no DOM
function addnewtask(){
  const tTask = window.prompt("Informe o nove da sua nova TASK: ");
  const cTask = window.prompt("Informe o conteúdo da sua TASK: ");

//verificar se o id task ja existe e acrecentando um numero a frente
  var noId = "#task";
  var numId = 0;
  if(numId == numId){
    var resId = `${noId}` + `${numId}`;
  }else{
    var  resId = `${noId}` + `${++numId}`;
}

  const novo_elemento = document.createElement('div'); //informando que o elemento será uma div
  novo_elemento.className = "tesk"; // atribuindo uma class para o elemento criado
  novo_elemento.id = resId; // atribuindo um id para o elemento criado
  novo_elemento.draggable = "true"; //add o atributo draggable para o elemento 
  novo_elemento.setAttribute("ondragstart", "drag(event)"); // add atributo de Ondragstart no elemento criado 
  novo_elemento.innerHTML = `${tTask}<br>${cTask}`; 

  const elemento = document.querySelector(".blocoContent"); // selecionando onde o elemento será criado
  elemento.appendChild(novo_elemento); //informado que o ele será criado após os elementos ja existentes

};

//função de arrastar e soltar o elemento criado
function allowDrop(ev){
  ev.preventDefault();
}

function drag(ev){
  ev.dataTransfer.setData("text/plain", ev.target.id); //verifica o tipo de dados e o valor dos dados arrastados
}

function drop(ev){
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  ev.target.appendChild(document.getElementById(data)); // quando dos dados arrastados são soltos, ocorre um novo evento de saltar
}