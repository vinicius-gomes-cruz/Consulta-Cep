// Elementos globais
const selectCidades = document.getElementById('cidades');
const divFormCep = document.getElementById('form_pesquisa_cep');
const divFormRua = document.getElementById('form_pesquisa_rua');
const btnParaCep = document.getElementById('btn_para_cep');
const btnParaRua = document.getElementById('btn_para_rua');
const inputCep = document.getElementById('cep');
const resultadosRuas = document.getElementById('resultados_ruas');
const ruaForm2 = document.getElementById('rua_form2');

// Função para inicializar o select de cidades
function inicializarSelectCidades() {
    cidades.forEach(cidade => {
        const option = document.createElement('option');
        option.text = cidade;
        option.value = cidade;
        selectCidades.add(option);
    });
}

// Alternar entre formulários
function exibirFormulario(formToShow, formToHide) {
    formToShow.classList.remove('hidden');
    formToHide.classList.add('hidden');
}

// Exibir mensagens de erro
function exibirErro(elemento, idErro, mensagem) {
    if (!document.getElementById(idErro)) {
        const erroHTML = `<small id="${idErro}" class="text-danger">${mensagem}</small>`;
        elemento.insertAdjacentHTML("afterend", erroHTML);
    }
}

// Remover mensagens de erro
function removerErro(idErro) {
    const erro = document.getElementById(idErro);
    if (erro) erro.remove();
}

// Pesquisar por CEP
async function pesquisarPorCEP(cep) {
    if (!cep) {
        exibirErro(inputCep, 'erro-cep', 'Preencha o campo do CEP!');
        return;
    }

    removerErro('erro-cep');

    try {
        const URL = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(URL);
        const data = await response.json();

        if (data.cep) {
            preencherCamposCEP(data);
        } else {
            limparCamposCEP();
            exibirErro(inputCep, 'erro-cep', 'Nenhum resultado encontrado!');
        }
    } catch (err) {
        console.error("Erro ao fazer a requisição:", err);
    }
}

// Preencher campos do formulário de CEP
function preencherCamposCEP(data) {
    document.getElementById('rua').value = data.logradouro || 'Não encontrado';
    document.getElementById('bairro').value = data.bairro || 'Não encontrado';
    document.getElementById('cidade').value = data.localidade || 'Não encontrado';
    document.getElementById('estado').value = data.uf || 'Não encontrado';
    document.getElementById('ibge').value = data.ibge || 'Não encontrado';
}

// Limpar campos do formulário de CEP
function limparCamposCEP() {
    ['rua', 'bairro', 'cidade', 'estado', 'ibge'].forEach(id => {
        document.getElementById(id).value = '';
    });
}

// Pesquisar por Rua
async function pesquisarPorRua(cidade, rua) {
    if (!cidade) {
        exibirErro(selectCidades, 'erro-cidade-2', 'Selecione uma cidade!');
        return;
    }

    removerErro('erro-cidade-2');

    if (!rua) {
        exibirErro(ruaForm2, 'erro-rua-2', 'Nome da rua obrigatório!');
        return;
    }

    removerErro('erro-rua-2');

    resultadosRuas.innerHTML = `
        <div class="text-white d-flex justify-content-center align-items-center p-2 h-100" id="loading_gif">
            <img src="assets/img/loading-gif.gif" alt="Loading..." width="50">
        </div>
    `;

    try {
        const URL = `https://viacep.com.br/ws/PR/${cidade}/${rua}/json/`;
        const response = await fetch(URL);
        const data = await response.json();

        if (response.ok && data.length) {
            preencherResultadosRua(data);
        } else {
            resultadosRuas.innerHTML = `<div class="text-white d-flex justify-content-center align-items-center p-2 h-100"><h5>Nenhum resultado encontrado.</h5></div>`;
        }
    } catch (err) {
        console.error("Erro ao fazer a requisição:", err);
        resultadosRuas.innerHTML = `<div class="text-white d-flex justify-content-center align-items-center p-2 h-100"><h5>Erro ao buscar resultados.</h5></div>`;
    }
}

// Preencher resultados do formulário de Rua
function preencherResultadosRua(resultados) {
    resultadosRuas.innerHTML = resultados.map(item => `
        <div class="text-white d-flex align-items-center p-2">
            ${item.logradouro || 'Logradouro não encontrado'}, ${item.bairro || 'Bairro não encontrado'} - ${item.cep}
        </div>
    `).join('');
}

// Event Listeners
btnParaRua.addEventListener('click', () => exibirFormulario(divFormRua, divFormCep));
btnParaCep.addEventListener('click', () => exibirFormulario(divFormCep, divFormRua));

// Inicializar o select de cidades na carga da página
document.addEventListener('DOMContentLoaded', inicializarSelectCidades);
