function showView(viewId) {
    const views = document.querySelectorAll('.view');
    views.forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    
    // Desplazarse al inicio de la página cuando cambia la vista
    window.scrollTo(0, 0);
}
document.addEventListener("DOMContentLoaded", () => {
    const phoneRegex = /(\+?\d[\d\s-]{7,}\d)/g;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,})/gi;
  
    document.querySelectorAll(".view").forEach(view => {
      view.innerHTML = view.innerHTML
        .replace(emailRegex, (match) => `<a href="mailto:${match}">${match}</a>`)
        .replace(phoneRegex, (match) => {
          const cleanNumber = match.replace(/[^\d]/g, "");
          return `<a href="https://wa.me/${cleanNumber}" target="_blank">${match}</a>`;
        });
    });
  });
  