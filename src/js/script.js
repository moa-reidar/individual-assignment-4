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
  // Håndter knapper med spesifikke tilstander
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.state === 'active') {
            document.querySelectorAll('.button').forEach(btn => btn.classList.remove('button--active-click'));
            button.classList.add('button--active-click');
        }
    });
  
    button.addEventListener('mouseover', () => {
        if (button.dataset.state === 'hover') {
            button.classList.add('button--hovering');
        }
    });
  
    button.addEventListener('mouseout', () => {
        button.classList.remove('button--hovering');
    });
  });
  