// Funksjon for å vise en spesifikk komponent
function showComponent(targetId) {
    document.querySelectorAll('.component').forEach(component => {
        component.classList.toggle('component--hidden', component.id !== targetId);
    });
  }
  
  // Legg til klikkhåndtering for navigasjonslenker
  document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        showComponent(link.getAttribute('href').substring(1));
    });
  });
  