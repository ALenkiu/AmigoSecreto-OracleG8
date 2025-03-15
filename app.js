
// Declara a variável para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo lista
function adicionarAmigo() {
    // Guarda o valor do campo de texto
    const amigoInput = document.getElementById("amigo");
    const nomeAmigo = amigoInput.value.trim();

    // Se o campo do nome não for preenchido ele exibe um alerta
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome na lista
    amigos.push(nomeAmigo);

    // Limpa o campo após adicionar
    amigoInput.value = "";

    // Atualiza a lista de amigos
    exibirListaAmigos();
}

// Função para exibir os amigos na lista
function exibirListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpa a lista existente para evitar duplicação
    listaAmigos.innerHTML = "";

    // Percorre o array de amigos e adiciona cada nome à lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome do amigo sorteado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}