    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Change icon
      const icon = menuToggle.querySelector('i');
      if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
      });
    });
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Projects data
    const projects = [
      {
        id: 'handwriting-similarity',
        title: 'Handwriting Similarity Checker',
        category: 'Machine Learning & Deep Learning',
        categoryType: 'ml',
        description: 'Deep Learning model using image feature extraction and similarity detection.',
        image: 'https://via.placeholder.com/600x400?text=Handwriting+Similarity'
      },
      {
        id: 'nutriguide-app',
        title: 'NutriGuide App + Walkthrough',
        category: 'Mobile App Development',
        categoryType: 'mobile',
        description: 'Health-focused app with a clean UI and recipe/nutritional guidance.',
        image: 'https://via.placeholder.com/600x400?text=NutriGuide+App'
      },
      {
        id: 'volunteer-chatbot',
        title: 'VolunteerUnity Chatbot',
        category: 'AI Chatbots & Creative Apps',
        categoryType: 'ai',
        description: 'Conversational assistant for volunteer recruitment and onboarding.',
        image: 'https://via.placeholder.com/600x400?text=Chatbot'
      },
      {
        id: 'wordup-game',
        title: 'Word Up! Game + Technical Breakdown',
        category: 'Game Design & Development',
        categoryType: 'game',
        description: 'A word scramble puzzle game built in Unity.',
        image: 'https://via.placeholder.com/600x400?text=Word+Up+Game'
      },
      {
        id: 'tourism-website',
        title: 'Tourism Website – Roam Radar',
        category: 'Web Projects',
        categoryType: 'web',
        description: 'Clean UI/UX for showcasing UAE tourist spots.',
        image: 'https://via.placeholder.com/600x400?text=Tourism+Website'
      },
      {
        id: 'twine-story',
        title: 'Twine Story – Life Play',
        category: 'Creative Tech & Storytelling',
        categoryType: 'creative',
        description: 'A digital narrative experience in interactive storytelling.',
        image: 'https://via.placeholder.com/600x400?text=Twine+Story'
      }
    ];
    
    // Render projects
    const projectsGrid = document.getElementById('projectsGrid');
    
    function renderProjects() {
      projectsGrid.innerHTML = '';
      
      projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
          <a href="/project.html?id=${project.id}" class="project-card">
            <div class="project-image">
              <img src="${project.image}" alt="${project.title}">
              <div class="project-overlay">
                <span class="text-sm font-medium">View Project Details →</span>
              </div>
            </div>
            <div class="project-details">
              <div class="project-category">
                <div class="project-icon">
                  ${getCategoryIcon(project.categoryType)}
                </div>
                <span class="text-sm text-brand-secondary font-medium">${project.category}</span>
              </div>
              <h3 class="project-name font-serif">${project.title}</h3>
              <p class="project-description">${project.description}</p>
            </div>
          </a>
        `;
        
        projectsGrid.appendChild(projectElement);
      });
    }
    
    function getCategoryIcon(type) {
      switch(type) {
        case 'ml':
          return '<i class="fas fa-brain"></i>';
        case 'mobile':
          return '<i class="fas fa-mobile-alt"></i>';
        case 'ai':
          return '<i class="fas fa-robot"></i>';
        case 'game':
          return '<i class="fas fa-gamepad"></i>';
        case 'web':
          return '<i class="fas fa-globe"></i>';
        case 'creative':
          return '<i class="fas fa-palette"></i>';
        default:
          return '';
      }
    }
    
    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
      renderProjects();
      window.scrollTo(0, 0);
    });