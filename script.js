//função para adicionar um novo elemento(task) no DOM
function addnewtask(){
  const tTask = window.prompt("Informe o nove da sua nova TASK: ");
  const cTask = window.prompt("Informe o conteúdo da sua TASK: ");


//gerando id aleatorio para a nova task criada
  var size = 12;// informando quando digitos terá o id 
  
  var randomize = Math.ceil(Math.random() * Math.pow(10,size));// criando um numero aleatório conforme definido na variavel size
  var digito = Math.ceil(Math.log(randomize));// criando um digito verificador inicial

  while(digito > 10){
    digito = Math.ceil(Math.log(digito))//pega o digito e refina até dicar menor que 10
  }
  var id = randomize + "_" + digito; //criando id e concatenando com o digito.



  const novo_elemento = document.createElement('div'); //informando que o elemento será uma div
  novo_elemento.className = "task"; // atribuindo uma class para o elemento criado
  novo_elemento.id = id; // atribuindo um id para o elemento criado
  novo_elemento.draggable = "true"; //add o atributo draggable para o elemento 
  novo_elemento.setAttribute("ondragstart", "drag(event)"); // add atributo de Ondragstart no elemento criado 
  novo_elemento.innerHTML = `<button class="close" type="submit">&times;</button>
                              <h3>${tTask}</h3> 
                              <p>${cTask}</p>`; 

  const elemento = document.querySelector(".blocoContent"); // selecionando onde o elemento será criado
  elemento.appendChild(novo_elemento); //informado que o ele será criado após os elementos ja existentes


  //botão para excluir a task desejada
  const close_btns = document.querySelectorAll(".close");//criar variavel com a clase informada 

  close_btns.forEach((btn) => { 
    btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";//crindo uma função de evendo para modificar o display da clase selecionada para none. isso não     exclui o elemento, somente deixa ele oculto.
  });
});
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