// Fonction pour afficher une section spécifique et cacher les autres
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }

  // Écouteurs d'événements pour les boutons
  document.getElementById('contactButton').addEventListener('click', function() {
    showSection('contactPopup');
  });

  document.getElementById('videoButton').addEventListener('click', function() {
    showSection('video');
  });

  document.getElementById('photoButton').addEventListener('click', function() {
    showSection('photo');
  });

  document.getElementById('cvButton').addEventListener('click', function() {
    showSection('cv');
  });