
document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const moreButtons = document.querySelectorAll('.show-more');
    
    // Funcionalidad principal
    function setupProjectCards() {
       
        closeAllDetails();
        
        // Eventos para cada botón
        moreButtons.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });
        
        // Evento para cerrar al hacer clic fuera
        document.addEventListener('click', handleDocumentClick);
    }
    
    // Manejadores de eventos
    function handleButtonClick(e) {
        e.stopPropagation();
        const moreInfo = this.nextElementSibling;
        const isExpanded = moreInfo.style.display === 'block';
        
        closeAllDetails(); // Cierra todos primero
        
        if (!isExpanded) {
            moreInfo.style.display = 'block';
            this.textContent = 'Ver menos';
            this.setAttribute('aria-expanded', 'true');
        }
    }
    
    function handleDocumentClick(event) {
        if (!event.target.closest('.project-card')) {
            closeAllDetails();
        }
    }
    
    // Función para cerrar todos
    function closeAllDetails() {
        document.querySelectorAll('.more-info').forEach(info => {
            info.style.display = 'none';
            const btn = info.previousElementSibling;
            if (btn.classList.contains('show-more')) {
                btn.textContent = 'Ver más';
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Inicializa
    setupProjectCards();
});