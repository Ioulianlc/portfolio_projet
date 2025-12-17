// Fonction pour ajouter l'effet flip aux lettres
function addFlipEffect(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        element.classList.add('text-flip');
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.className = 'letter';
            
            // Ajouter la classe 'flip' aux lettres impaires (index 1, 3, 5...)
            if (index % 2 !== 0) {
                span.classList.add('flip');
            }
            
            element.appendChild(span);
        });
    });
}

// Appliquer l'effet sur différents éléments de votre page
document.addEventListener('DOMContentLoaded', function() {
    // Sur le titre "À Propos"
    addFlipEffect('.titre-section');
    
    // Sur les titres de projets
    addFlipEffect('.num-projet h1:nth-child(2)');
    
    // Sur les liens de navigation (optionnel)
    addFlipEffect('nav a');
    
    // Sur le titre "Portfolio" dans le header
    addFlipEffect('.nav-hero h1');
});
