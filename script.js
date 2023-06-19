// Função buscar CEP
function buscarCep() {

    // Armazena o valor do input do usuário (cep)
    let input = document.getElementById('cep').value;

    // Http request (chamada de requisição da API)
    const xhr = new XMLHttpRequest();

    // Configura a requisição
    xhr.open("GET", 'https://viacep.com.br/ws/' + input + '/json/')

    // Envia a requisição
    xhr.send();

    // Quando o conteúdo da API for carregado
    xhr.onload = function () {

        // Armazena o valor da tag P onde vai ser a resposta da api
        document.getElementById('texto').innerHTML = this.responseText;

        // Cria um objeto para passar a resposta da API (texto) para JSON (transformar em objeto para acessar seus atributos)
        let obj = JSON.parse(this.responseText);

        // Armazena a cidade fornecida pela api através do CEP digitado
        let cidade = obj.localidade;

        // Armazena a UF fornecida pela api através do CEP digitado
        let uf = obj.uf;

        // Exibe a resposta da api
        document.getElementById('texto').innerHTML = "Cidade: " + cidade + "<br> Estado: " + uf
    }

}