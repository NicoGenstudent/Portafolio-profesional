/**
 * item-management.js
 * Dynamically loads portfolio items into the grid on portfolio.html
 * and initializes Isotope filtering/layout and GLightbox.
 * Assumes projects.js and main.js (with Isotope/GLightbox libs) are loaded first.
 */

document.addEventListener('DOMContentLoaded', () => {
    // More specific selector to target only the portfolio container
    const portfolioContainer = document.querySelector('#portfolio .isotope-container');
    const portfolioFilters = document.querySelectorAll('#portfolio .portfolio-filters li');
  
    // Ensure projectsData is loaded from projects.js and the container exists
    if (typeof projectsData === 'undefined') {
        console.error("Error: projectsData is not loaded. Check projects.js inclusion and path.");
        return; // Stop execution if data is missing
    }
    if (!portfolioContainer) {
        console.error("Error: Portfolio container ('#portfolio .isotope-container') not found.");
        return; // Stop execution if container is missing
    }
    if (typeof Isotope === 'undefined') {
        console.error("Error: Isotope library is not loaded. Check vendor script includes.");
        return; // Stop execution if Isotope is missing
    }
     if (typeof imagesLoaded === 'undefined') {
        console.error("Error: imagesLoaded library is not loaded. Check vendor script includes.");
        // We might still proceed but layout might be incorrect initially
    }
     if (typeof GLightbox === 'undefined') {
        console.warn("Warning: GLightbox library is not loaded. Lightbox previews will not work.");
        // We can proceed but lightbox won't function
    }
  
  
    // Clear any potential static content from the template
    portfolioContainer.innerHTML = '';
  
    // Loop through project data and create HTML for each item
    projectsData.forEach(project => {
      // 1. Create the main column div
      const colDiv = document.createElement('div');
      const filterClasses = getFilterClasses(project.category); // Get filter classes
      colDiv.className = `col-lg-4 col-md-6 portfolio-item isotope-item ${filterClasses}`;
      // Add AOS animation attributes if desired (optional)
      // colDiv.setAttribute('data-aos', 'fade-up');
      // colDiv.setAttribute('data-aos-delay', '100'); // Could vary delay
  
      // 2. Create the portfolio-content div
      const contentDiv = document.createElement('div');
      contentDiv.className = 'portfolio-content h-100';
  
      // 3. Create the image
      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'portfolio-image-wrapper';

      const img = document.createElement('img');
      img.src = (project.images && project.images.length > 0) ? project.images[0].src : 'assets/img/portfolio/default-placeholder.png'; // Provide a real fallback image path if you have one
      img.alt = project.title;
      img.className = 'img-fluid';
      img.loading = 'lazy';
      imageWrapper.appendChild(img);
  
      // 4. Create the portfolio-info div
      const infoDiv = document.createElement('div');
      infoDiv.className = 'portfolio-info';
  
      // 5. Create Title (h4)
      const title = document.createElement('h4');
      title.textContent = project.title;
  
      // 6. Create Short Description (p) - Using Category
      const descriptionP = document.createElement('p');
      descriptionP.textContent = project.category || '';
  
      // 7. Create Preview Link (glightbox)
      const previewLink = document.createElement('a');
      previewLink.href = img.src;
      previewLink.title = `${project.title} Preview`;
      previewLink.dataset.gallery = 'portfolio-gallery';
      previewLink.className = 'glightbox preview-link';
      previewLink.innerHTML = '<i class="bi bi-zoom-in"></i>';
  
      // 8. Create Details Link
      const detailsLink = document.createElement('a');
      detailsLink.href = `portfolio-details.html?project=${project.id}`;
      detailsLink.title = 'More Details';
      detailsLink.className = 'details-link';
      detailsLink.innerHTML = '<i class="bi bi-link-45deg"></i>';
  
      // 9. Append elements together
      infoDiv.appendChild(title);
      infoDiv.appendChild(descriptionP);
      infoDiv.appendChild(previewLink);
      infoDiv.appendChild(detailsLink);
      contentDiv.appendChild(imageWrapper);
      contentDiv.appendChild(infoDiv);
      colDiv.appendChild(contentDiv);
  
      // 10. Append the complete card to the main container
      portfolioContainer.appendChild(colDiv);
    });
  
    // 11. Initialize Isotope AFTER items are added and images are loaded
    // We use imagesLoaded to ensure layout is correct
    if (typeof imagesLoaded === 'function') {
        imagesLoaded(portfolioContainer, function() {
            initializeIsotopeAndFilters(portfolioContainer, portfolioFilters);
            initializeLightbox(); // Initialize GLightbox after layout
        });
    } else {
        // Fallback if imagesLoaded isn't available (layout might be imperfect initially)
        console.warn("imagesLoaded not found. Initializing Isotope directly.");
        initializeIsotopeAndFilters(portfolioContainer, portfolioFilters);
        initializeLightbox(); // Initialize GLightbox anyway
    }
  
  }); // End DOMContentLoaded
  
  /**
   * Initializes or re-initializes Isotope and sets up filter button listeners.
   * @param {Element} container - The Isotope container element.
   * @param {NodeListOf<Element>} filters - The filter button elements.
   */
  function initializeIsotopeAndFilters(container, filters) {
      console.log('Initializing Isotope...');
      try {
          // Get Isotope options from data attributes on the parent .isotope-layout element if needed
          const layoutElement = container.closest('.isotope-layout');
          const layoutMode = layoutElement?.getAttribute('data-layout') ?? 'masonry';
          const initialFilter = layoutElement?.getAttribute('data-default-filter') ?? '*';
          const sortBy = layoutElement?.getAttribute('data-sort') ?? 'original-order';
  
          let iso = new Isotope(container, {
              itemSelector: '.isotope-item',
              layoutMode: layoutMode,
              filter: initialFilter, // Apply default filter on init
              sortBy: sortBy,
              percentPosition: true,
          });
  
          // Activate filter buttons
          if (filters.length > 0) {
              filters.forEach(function(filter) {
                  // Remove any existing listeners first (optional, but safer)
                  // filter.removeEventListener('click', filterClickHandler); // Requires defining the handler outside
                  filter.addEventListener('click', function(e) { // Define handler inline
                      e.preventDefault();
                      filters.forEach(el => el.classList.remove('filter-active'));
                      this.classList.add('filter-active');
                      let filterValue = this.getAttribute('data-filter');
                      iso.arrange({ filter: filterValue });
                      // Optional: Refresh AOS if needed after filtering
                      if (typeof AOS !== 'undefined' && typeof AOS.refresh === 'function') {
                          AOS.refresh();
                      }
                  });
              });
               // Ensure the initial active filter button matches the default filter
               const activeFilterButton = document.querySelector(`.portfolio .portfolio-filters li[data-filter="${initialFilter}"]`);
               if (activeFilterButton) {
                   filters.forEach(el => el.classList.remove('filter-active'));
                   activeFilterButton.classList.add('filter-active');
               }
  
          } else {
              console.warn('Portfolio filter buttons not found.');
          }
          console.log('Isotope initialized successfully.');
  
      } catch (e) {
          console.error('Error initializing Isotope:', e);
      }
  }
  
  /**
   * Initializes or re-initializes GLightbox.
   */
  function initializeLightbox() {
     if (typeof GLightbox === 'function') {
           console.log('Initializing GLightbox...');
           const lightbox = GLightbox({
               selector: '.glightbox' // Use the same selector as main.js
               // Add any other GLightbox options if needed
           });
           console.log('GLightbox initialized.');
     } else {
         console.warn('GLightbox function not found, cannot initialize lightbox.');
     }
  }
  
  
  /**
   * Helper function to map project category to Isotope filter classes.
   * @param {string} category - The category string from projects.js
   * @returns {string} - Space-separated filter classes
   */
  function getFilterClasses(category) {
      if (!category) return '';
      let classes = '';
      const lowerCategory = category.toLowerCase();
  
      // --- IMPORTANT: Adjust these conditions ---
      // Match these lowerCategory.includes(...) checks to the EXACT category strings
      // you use in projects.js and map them to the correct 'filter-*' classes
      // defined in your filter buttons list in portfolio.html.
      if (lowerCategory.includes('game development') || lowerCategory.includes('python')) {
          classes += ' filter-app'; // Maps to 'Programs' button
      }
      if (lowerCategory.includes('web application')) {
           // Web apps can be both Programs and Pages depending on your view
          classes += ' filter-app filter-pages';
      }
      if (lowerCategory.includes('static web page') || lowerCategory.includes('javascript experiment')) {
           classes += ' filter-pages'; // Maps to 'Pages' button
      }
      if (lowerCategory.includes('digital art') || lowerCategory.includes('illustration')) {
          classes += ' filter-drawings'; // Maps to 'Drawings' button
      }
      // ------------------------------------------
  
      return classes.trim();
  }