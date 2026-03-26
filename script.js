document.addEventListener("DOMContentLoaded", () => {
    // Manejar los botones "Ver más"
    const showMoreButtons = document.querySelectorAll(".show-more")
  
    showMoreButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const moreInfo = this.nextElementSibling
  
        if (moreInfo.style.display === "block") {
          moreInfo.style.display = "none"
          this.textContent = "Ver más"
        } else {
          moreInfo.style.display = "block"
          this.textContent = "Ver menos"
        }
      })
    })
  
    // Animación suave para los enlaces de navegación
    const navLinks = document.querySelectorAll("nav a")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        // Verificar si el enlace apunta a un ancla dentro de la misma página (ej: #dev-side)
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault()
    
            const targetId = this.getAttribute("href")
            const targetSection = document.querySelector(targetId)
    
            if (targetSection) {
                window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
                })
            }
        }
      })
    })
  
    // Funcionalidad para videos
    setupVideoPlayers()
    setupVideoModals()

    // --- NUEVO: FUNCIONALIDAD PARA CERRAR EL REPRODUCTOR MODAL ---
    const btnCerrarJuego = document.getElementById('close-game-modal');
    if(btnCerrarJuego) {
        btnCerrarJuego.addEventListener('click', cerrarJuegoModal);
    }

    // Permitir cerrar el modal de juego si se hace clic fuera del marco principal
    const gameModalPlayer = document.getElementById('game-modal-player');
    if(gameModalPlayer) {
        gameModalPlayer.addEventListener('click', (e) => {
            if(e.target === gameModalPlayer) {
                cerrarJuegoModal();
            }
        });
    }
})
  
// Configurar reproductores de video
function setupVideoPlayers() {
    const videoOverlays = document.querySelectorAll(".video-overlay")
  
    videoOverlays.forEach((overlay) => {
      overlay.addEventListener("click", function () {
        const videoContainer = this.closest(".video-container")
        const video = videoContainer.querySelector("video")
  
        if (video) {
          if (video.paused) {
            video.play()
            this.style.display = "none"
          } else {
            video.pause()
            this.style.display = "flex"
          }
        }
      })
    })
  
    // Pausar videos cuando salen del viewport
    const videos = document.querySelectorAll("video")
  
    if ("IntersectionObserver" in window) {
      const videoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              const video = entry.target
              if (!video.paused) {
                video.pause()
                const container = video.closest(".video-container")
                if (container) {
                  const overlay = container.querySelector(".video-overlay")
                  if (overlay) overlay.style.display = "flex"
                }
              }
            }
          })
        },
        { threshold: 0.2 },
      )
  
      videos.forEach((video) => {
        videoObserver.observe(video)
      })
    }
  
    // Manejar eventos de video
    videos.forEach((video) => {
      video.addEventListener("ended", function () {
        const container = this.closest(".video-container")
        if (container) {
          const overlay = container.querySelector(".video-overlay")
          if (overlay) overlay.style.display = "flex"
        }
      })
    })
}
  
// Configurar modales de video
function setupVideoModals() {
    const openModalButtons = document.querySelectorAll(".open-video-modal")
    const closeModalButtons = document.querySelectorAll(".close-modal")
    const videoModals = document.querySelectorAll(".video-modal")
  
    openModalButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const modalId = this.getAttribute("data-modal")
        const modal = document.getElementById(modalId)
  
        if (modal) {
          modal.classList.add("active")
  
          // Reproducir el video si existe
          const video = modal.querySelector("video")
          if (video) video.play()
        }
      })
    })
  
    closeModalButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const modal = this.closest(".video-modal")
  
        if (modal) {
          modal.classList.remove("active")
  
          // Pausar el video si existe
          const video = modal.querySelector("video")
          if (video) video.pause()
  
          // Pausar iframe videos (YouTube, etc.)
          const iframe = modal.querySelector("iframe")
          if (iframe) {
            const iframeSrc = iframe.src
            iframe.src = iframeSrc
          }
        }
      })
    })
  
    // Cerrar modal al hacer clic fuera del contenido
    videoModals.forEach((modal) => {
      modal.addEventListener("click", function (e) {
        if (e.target === this) {
          this.classList.remove("active")
  
          // Pausar el video si existe
          const video = this.querySelector("video")
          if (video) video.pause()
  
          // Pausar iframe videos (YouTube, etc.)
          const iframe = this.querySelector("iframe")
          if (iframe) {
            const iframeSrc = iframe.src
            iframe.src = iframeSrc
          }
        }
      })
    })
}

// --- NUEVAS FUNCIONES GLOBALES PARA CONSTRUCT 3 ---

// Función para abrir el juego de Construct 3 en el Modal
function abrirJuegoModal(gameUrl, gameTitle) {
    const modal = document.getElementById('game-modal-player');
    const iframe = document.getElementById('modal-game-frame');
    const title = document.getElementById('game-modal-title');

    // Prevenir errores si los elementos no existen
    if(!modal || !iframe || !title) return;

    // Asignar título y ruta del juego para que Construct 3 comience a cargar
    title.textContent = gameTitle;
    iframe.src = gameUrl;
    
    // Mostrar el modal intercambiando clases de Tailwind
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Evitar que el scroll del fondo (body) siga funcionando mientras se juega
    document.body.style.overflow = 'hidden';
    
    // Dar foco al iframe para que Construct 3 capture teclado/ratón inmediatamente
    setTimeout(() => {
        iframe.focus();
    }, 300);
}

// Función para cerrar el Modal y matar la instancia del juego
function cerrarJuegoModal() {
    const modal = document.getElementById('game-modal-player');
    const iframe = document.getElementById('modal-game-frame');
    
    if(!modal || !iframe) return;

    // Ocultar modal
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
    // Restaurar el scroll de la página principal
    document.body.style.overflow = 'auto';

    // CRÍTICO: Limpiar el src para destruir la instancia del juego.
    // Si no hacemos esto, el motor de Construct 3 seguirá ejecutándose de fondo,
    // gastando RAM, reproduciendo audio o leyendo controles por error.
    iframe.src = ''; 
}