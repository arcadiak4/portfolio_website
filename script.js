window.onload = () => {
  // Initialisation d'Isotope
  const items = document.querySelector('.masonry-container');

  var isotopeOptions = {
    itemSelector: '.masonry-container-item',
    masonry: {
      columnWidth: '.masonry-container-item',
      resize: true // active la redimension dynamique
    }
  };

  const itemsGrid = new Isotope(items, isotopeOptions);
  console.log(itemsGrid);

  // Ajout d'un écouteur d'événements sur tous les éléments .filter-item
  document.querySelectorAll('.filter-item').forEach(button => {
    button.addEventListener('click', function(event) {
      // Récupération de la valeur de filtre à partir de l'attribut data-filter du bouton cliqué
      var filterValue = this.dataset.filter;
      console.log('Filter value:', filterValue); // Débogage

      // Application du filtre à l'aide de l'objet Isotope
      itemsGrid.arrange({ filter: filterValue });
      console.log('Arranging items with filter:', filterValue); // Débogage
      console.log(itemsGrid);

      // Récupérer les éléments filtrés
      const filteredItems = itemsGrid.filteredItems.map(item => item.element);
      console.log('Éléments filtrés:', filteredItems);
    });
  });

  // play iframe video on hover
  document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll('.video');
    videos.forEach(function(video) {
        video.addEventListener('mouseover', function(event) {
            var currentSrc = video.getAttribute('src');
            console.log(currentSrc);
            video.setAttribute('src', currentSrc + '&autoplay=1');
            event.preventDefault();
        });
    });
});

  // menu responsive
  const menuBurger = document.querySelector(".default-icon");
  const menuLinks = document.querySelector(".header-menu-section");
  const body = document.body;

  menuBurger.addEventListener('click', function() {
    // open menu
    if (this.src.includes('burger-bar.png')) {
      menuLinks.classList.add('open-menu');
      menuLinks.classList.remove('close-menu', false);
        this.src = 'icons/close-window.png';
        body.style.overflow = 'hidden';
    // close menu
    } else {
      this.src = 'icons/burger-bar.png';
      menuLinks.classList.remove('open-menu');
      menuLinks.classList.add('close-menu');
      body.style.overflow = 'auto';
    }
  });

  // apply style for close-menu then remove this class
  menuLinks.addEventListener('transitionend', function(event) {
    if (event.propertyName === 'opacity') {
      menuLinks.classList.remove('close-menu');
    }
  });
}

