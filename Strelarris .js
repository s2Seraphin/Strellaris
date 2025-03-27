// Efeito de rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Rolagem suave para o destino
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animação de navegação - muda a cor de fundo da barra quando o usuário rola a página
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

// Exemplo de exibição de notificação após a interação do usuário
document.querySelector('.btn').addEventListener('click', () => {
    alert('Obrigado por se juntar a Strellaris! Em breve você receberá mais informações.');
});