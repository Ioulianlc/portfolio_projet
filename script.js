document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne toutes les sections de la page
    const sections = document.querySelectorAll('section');

    // S'il n'y a pas de sections, on ne fait rien
    if (sections.length === 0) {
        return;
    }

    // Crée un observateur d'intersection
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si la section est dans le viewport
            if (entry.isIntersecting) {
                // Ajoute la classe 'is-visible' pour déclencher l'animation
                entry.target.classList.add('is-visible');
                // Cesse d'observer la section une fois qu'elle est animée
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Déclenche quand 10% de l'élément est visible
    });

    // Observe chaque section
    sections.forEach(section => {
        observer.observe(section);
    });
});