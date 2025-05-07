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
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)
  
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        })
      })
    })
  
    // Funcionalidad para videos
    setupVideoPlayers()
    setupVideoModals()
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
  