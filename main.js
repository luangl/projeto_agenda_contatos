const form = document.getElementById('form-atividade');
const contatos = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputTelefoneContato = document.getElementById('telefone')

    if (contatos.includes(inputTelefoneContato.value)) {
        alert(`O Contato de número: ${inputTelefoneContato.value} já foi salvo`);
    } else {

        contatos.push(inputTelefoneContato.value);

        if (contatos.includes(inputNomeContato.value)) {
            alert(`O Contato de nome: ${inputNomeContato.value} já foi salvo`);
        } else {
    
            contatos.push(inputNomeContato.value);


        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
}

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
