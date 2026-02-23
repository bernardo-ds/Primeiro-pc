document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('toggle-tema');
    const temaStatus = document.getElementById('tema-status');

    if (localStorage.getItem('dark-mode') === 'active') {
        document.body.classList.add('dark-mode');
        if (btnTema) btnTema.checked = true;
        if (temaStatus) temaStatus.textContent = "Ativado";
    }

    if (btnTema) {
        btnTema.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            const isActive = document.body.classList.contains('dark-mode');
            localStorage.setItem('dark-mode', isActive ? 'active' : 'inactive');
            if (temaStatus) temaStatus.textContent = isActive ? "Ativado" : "Desativado";
        });
    }
});
