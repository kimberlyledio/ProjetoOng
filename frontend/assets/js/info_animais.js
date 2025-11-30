document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Obter os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const animalId = urlParams.get('id'); // Pega o valor do parâmetro 'id' (ex: 'nanda')

    // 2. Se um ID de animal for encontrado
    if (animalId) {
        // Encontra todos os elementos de perfil
        const perfis = document.querySelectorAll('.perfil');

        // Itera sobre todos os perfis para escondê-los primeiro
        perfis.forEach(perfil => {
            perfil.classList.remove('ativo'); // Garante que todos estão escondidos
        });

        // 3. Constrói o ID do slide esperado (ex: "slide-nanda")
        const slideId = `slide-${animalId}`;
        
        // Encontra o elemento de perfil correspondente ao ID da URL
        const perfilParaExibir = document.getElementById(slideId);

        // 4. Se o perfil for encontrado, adiciona a classe 'ativo' para mostrá-lo
        if (perfilParaExibir) {
            perfilParaExibir.classList.add('ativo');
            
            // Opcional: Chama a função para iniciar o slider de imagens, se você tiver uma.
            // Exemplo: iniciarSlider(perfilParaExibir);
        } else {
            console.warn(`Nenhum slide encontrado com o ID: ${slideId}`);
            // Opcional: Exibir uma mensagem de erro ou redirecionar.
        }
        
        // Lógica de Tabela (Opcional, mas útil para aprimorar a experiência)
        // Você pode também usar esse 'animalId' para carregar a informação da tabela 
        // dinamicamente em vez de hardcodar a informação da 'Nanda'.
    } else {
        console.log('Nenhum parâmetro "id" encontrado na URL. Exibindo o primeiro slide ou uma tela de erro.');
        // Lógica para quando não há ID na URL (ex: mostra o primeiro por padrão)
        const primeiroPerfil = document.querySelector('.perfil');
        if (primeiroPerfil) {
             primeiroPerfil.classList.add('ativo');
        }
    }
});