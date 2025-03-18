//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    let listaAmigos = document.getElementById('listaAmigos');

    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nome);

    let li = document.createElement('li');
    li.textContent = nome;
    listaAmigos.appendChild(li);

    input.value = ''; // limpa o campo de entrada ao adicionar um nome
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    let li = document.createElement('li');
    li.textContent = `O amigo sorteado foi: ${nomeSorteado}`;
    resultado.appendChild(li);
}