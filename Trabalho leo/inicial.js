document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('toggle-tema');
    const temaStatus = document.getElementById('tema-status');

    // 1. Verifica se já existe uma preferência salva no navegador
    const darkThemeSelected = localStorage.getItem('dark-mode') === 'active';

    // 2. Aplica o tema salvo ao carregar a página
    if (darkThemeSelected) {
        document.body.classList.add('dark-mode');
        if (btnTema) btnTema.checked = true;
        if (temaStatus) temaStatus.textContent = "Ativado";
    }

    // 3. Ouve o clique no botão switch
    if (btnTema) {
        btnTema.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            
            const isActive = document.body.classList.contains('dark-mode');
            
            // 4. Salva a escolha para a próxima visita
            localStorage.setItem('dark-mode', isActive ? 'active' : 'inactive');
            
            // 5. Atualiza o texto de status
            if (temaStatus) {
                temaStatus.textContent = isActive ? "Ativado" : "Desativado";
            }
        });
    }
});
