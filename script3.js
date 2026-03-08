document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    // Função para verificar a posição dos cards na tela
    const observerOptions = {
        threshold: 0.2 // O card aparece quando 20% dele estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Adiciona um pequeno atraso (delay) para cada card aparecer um após o outro
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 150); 
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});