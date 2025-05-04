
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
  
    // 2. Find Project Data
    if (typeof projectsData === 'undefined') {
      console.error('Project data is not loaded.');
      document.getElementById('project-page-title').textContent = 'Error';
      document.getElementById('project-page-description').textContent = 'Could not load project data.';
      return;
    }
  
    const project = projectsData.find(p => p.id === projectId);
  
    // 3. Handle Project Not Found
    if (!project) {
      console.error(`Project with ID "${projectId}" not found.`);
      document.getElementById('project-page-title').textContent = 'Project Not Found';
      document.getElementById('project-page-description').textContent = 'The requested project does not exist.';
      document.getElementById('portfolio-details').style.display = 'none';
      return;
    }
  
    // 4. Update Page Content
    document.title = `Portfolio Details | ${project.title}`; 
    document.getElementById('project-page-title').textContent = project.title;
    document.getElementById('project-page-description').textContent = project.pageTitleDescription;
    document.getElementById('breadcrumb-current').textContent = project.title;
  
    const infoList = document.getElementById('project-info-list');
    infoList.innerHTML = `
      <li><strong>Category</strong>: <span>${project.category || 'N/A'}</span></li>
      <li><strong>Client</strong>: <span>${project.client || 'N/A'}</span></li>
      <li><strong>Project date</strong>: <span>${project.date || 'N/A'}</span></li>
      <li><strong>Project URL</strong>: ${project.projectUrl && project.projectUrl !== '#' ? `<a href="${project.projectUrl}" target="_blank" rel="noopener noreferrer">${project.urlText || project.projectUrl}</a>` : `<span>${project.urlText || 'Not available'}</span>`}</li>
    `; 
  
    // Update Project Description
    document.getElementById('project-info-title').textContent = project.title; 
    document.getElementById('project-description-title').textContent = project.title;
    document.getElementById('project-description-content').innerHTML = project.description;
  
  
    // 5. Update Swiper Slider
    const sliderWrapper = document.getElementById('portfolio-slider-wrapper');
    sliderWrapper.innerHTML = '';
  
    if (project.images && project.images.length > 0) {
        project.images.forEach(image => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
  
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt || project.title;
  
        slide.appendChild(img);
        sliderWrapper.appendChild(slide);
        });
    } else {
        sliderWrapper.innerHTML = '<div class="swiper-slide"><p>No images available for this project.</p></div>';
    }
  
  
    // 6. Initialize Swiper MANUALLY

    const swiperConfigElement = document.querySelector('.portfolio-details-slider .swiper-config');
    if (swiperConfigElement) {
        try {
            const swiperConfig = JSON.parse(swiperConfigElement.textContent);
            new Swiper('.portfolio-details-slider', swiperConfig);
        } catch (e) {
            console.error('Error parsing Swiper config or initializing Swiper:', e);
        }
    } else {
         console.error('Swiper configuration element not found.');
    }
  
    // 7. Re-initialize AOS if needed (optional, content might be visible anyway)
     if (typeof AOS !== 'undefined') {
      AOS.refresh();
     }
  
  
  }); 