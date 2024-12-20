// Get all project elements
const projects = document.querySelectorAll('.project');

// Add a hover effect to project boxes
projects.forEach(project => {
  project.addEventListener('mouseover', () => {
    project.style.transform = 'scale(1.05)';
  });

  project.addEventListener('mouseout', () => {
    project.style.transform = 'scale(1)';
  });
});

// Change background color on click (optional)
projects.forEach(project => {
  project.addEventListener('click', () => {
    project.style.backgroundColor = '#e6f7ff'; 
  });
});

projects.forEach(project => {
  project.addEventListener('scroll', () => {
    project.querySelector('a').style.transform = 'translateY(0)'; 
  });
});
