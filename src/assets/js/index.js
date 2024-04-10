const botaoProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoProjetos.addEventListener('click', () => { 
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
        botaoProjetos.classList.add("remover");
    }

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativos => {
        projetosInativos.classList.add('ativo');
    });
}
