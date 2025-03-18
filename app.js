//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    let listaAmigos = document.getElementById('listaAmigos');

    function temNumero(texto) {
        const numeros = '0123456789';
        for (let i = 0; i < texto.length; i++) {
            if (numeros.includes(texto[i])) {
                return true;
            }
        }
        return false;
    }

    if (nome === '' || temNumero(nome)) {
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

    let removerNomeBotao = document.createElement('button');
    removerNomeBotao.textContent = 'x';
    removerNomeBotao.classList.add('botao-removerNome');
    removerNomeBotao.onclick = function() {
        amigos = amigos.filter(item => item !== nome);
        li.remove();
    };
    li.appendChild(removerNomeBotao);

    listaAmigos.appendChild(li);

    input.value = '';
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length < 2) {
        alert('Adicione pelo menos dois nomes para sortear!');
        return;
    }

    resultado.innerHTML = '';

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    let li = document.createElement('li');
    li.textContent = `O amigo sorteado foi: ${nomeSorteado}`;
    resultado.appendChild(li);
}

function limparLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    let resultado = document.getElementById('resultado');
    
    amigos = [];
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
}