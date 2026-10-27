const title = document.getElementById("titulo");
const nameInput = document.getElementById("nome");
const changeTitleButton = document.getElementById("mudarTitulo");

// ATIVIDADE 1: selecionar um elemento do HTML e mudar seu texto.
changeTitleButton.addEventListener("click", () => {
  const newTitle = nameInput.value.trim();
  if (!newTitle) {
    nameInput.focus();
    title.textContent = "Aula DOM";
    alert("Digite um título antes de alterar.");
    return;
  }
  title.textContent = newTitle;
});

// ATIVIDADE 2: localizar a posição e atualizar o time escolhido.
document.getElementById("adicionarTime").addEventListener("click", () => {
  const teamName = document.getElementById("novo").value.trim();
  const position = Number(document.getElementById("posicao").value);
  if (!teamName) {
    alert("Digite o nome de um time.");
    document.getElementById("novo").focus();
    return;
  }
  if (![1, 2, 3].includes(position)) {
    alert("Selecione uma posição entre 1 e 3.");
    document.getElementById("posicao").focus();
    return;
  }
  const target = document.querySelectorAll("#ranking .time")[position - 1];
  if (!target) {
    alert("Não foi possível localizar essa posição no ranking.");
    return;
  }
  target.textContent = teamName;
  document.getElementById("novo").value = "";
  document.getElementById("posicao").value = "";
});

// ATIVIDADE 3: converter o número digitado no nome do mês.
const months = ["Janeiro", "Fevereiro", "Março", "Abril"];
document.getElementById("mostrarMes").addEventListener("click", () => {
  const monthNumber = Number(document.getElementById("mes").value);
  const result = document.getElementById("resultado");
  if (!Number.isInteger(monthNumber) || monthNumber < 1 || monthNumber > months.length) {
    result.textContent = "Escolha um número de 1 a 4.";
    return;
  }
  result.textContent = months[monthNumber - 1];
});

// ATIVIDADE 4: criar uma imagem por meio do DOM e anexá-la à página.
document.getElementById("btnImage").addEventListener("click", () => {
  const container = document.getElementById("containerImg");
  if (document.getElementById("minhaImagem")) {
    document.getElementById("imagemStatus").textContent = "A imagem já foi criada.";
    return;
  }
  const image = document.createElement("img");
  image.id = "minhaImagem";
  image.src = "assets/images/Imagem2.jpg";
  image.alt = "Imagem usada na atividade de manipulação do DOM";
  image.loading = "lazy";
  image.decoding = "async";
  image.addEventListener("error", () => {
    document.getElementById("imagemStatus").textContent = "Não foi possível carregar a imagem. Confira se o arquivo está em assets/images/Imagem2.jpg.";
  });
  container.appendChild(image);
  const status = document.createElement("p");
  status.id = "imagemStatus";
  status.className = "image-message";
  status.textContent = "Imagem criada com createElement() e adicionada com appendChild().";
  container.appendChild(status);
});

// ATIVIDADE 5: demonstrar eventos de clique e passagem do mouse.
const eventButton = document.getElementById("btnmsg");
const eventResult = document.getElementById("eventResult");
eventButton.addEventListener("click", () => {
  eventButton.textContent = "Você clicou no botão!";
  eventButton.classList.remove("mouseover-state");
  eventResult.textContent = "Evento click: o botão foi clicado.";
});
eventButton.addEventListener("mouseenter", () => {
  eventButton.textContent = "Você passou o mouse!";
  eventButton.classList.add("mouseover-state");
  eventResult.textContent = "Evento mouseenter: o cursor entrou na área do botão.";
});
eventButton.addEventListener("mouseleave", () => {
  eventButton.classList.remove("mouseover-state");
});
