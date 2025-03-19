document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', function() {
    const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    
    mobileMenuButton.setAttribute('aria-expanded', !expanded);
    
    if (expanded) {
      mobileMenu.style.maxHeight = '0';
    } else {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    }
  });
});