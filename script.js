// 1. Efeito de Digitação no Hero
const typewriterElement = document.getElementById('typewriter');
const words = ['Mulheres Fortes.', 'Corações Sábios.', 'Mãos que Criam.', 'Sua Essência.'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 2000; // Pausa no final da palavra
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

// 2. Sistema de Troca de Poemas
const poems = [
    "\"Mulher é o verso mais bonito que a vida já escreveu no livro da existência.\"",
    "\"Ser mulher é carregar nos ombros a força de mil gerações e no olhar a doçura do amanhã.\"",
    "\"A maior lição que aprendo com vocês é que a verdadeira coragem não faz barulho; ela persiste.\"",
    "\"Mãe: a palavra que resume todo o apoio e amor que recebi nesta vida.\"",
    "\"Onde há uma mulher, há magia, resistência e um aprendizado constante.\""
];
let currentPoemIndex = 0;

function changePoem() {
    const display = document.getElementById('poem-display');
    display.style.opacity = 0;
    
    setTimeout(() => {
        currentPoemIndex = (currentPoemIndex + 1) % poems.length;
        display.innerHTML = `<p class="poem-text">${poems[currentPoemIndex]}</p>`;
        display.style.opacity = 1;
    }, 500);
}

// 3. Scroll Reveal (Revelar ao rolar)
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// 4. Dark Mode Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Inicialização
window.addEventListener("scroll", reveal);
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    reveal(); // Verifica se já há elementos visíveis no carregamento
});