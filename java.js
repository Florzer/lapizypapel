document.addEventListener('DOMContentLoaded', (event) => {

    // Funcionalidad de búsqueda
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    const gameTitles = document.querySelectorAll('.game__title');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();

        gameTitles.forEach(title => {
            const game = title.closest('.game');
            if (title.textContent.toLowerCase().includes(searchTerm)) {
                game.style.display = '';
            } else {
                game.style.display = 'none';
            }
        });
    });
    
    // Funcionalidad de zoom en el carrusel
    const carouselImages = document.querySelectorAll('.carousel-inner .d-block');
    
    carouselImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.1)';
        });
    
        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1.0)';
        });
    });
    
});
