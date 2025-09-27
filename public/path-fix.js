// This script helps fix path issues in GitHub Pages
(function() {
  // Check if we're running on GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  if (isGitHubPages) {
    // Log for debugging
    console.log('Running on GitHub Pages, applying path fixes');
    
    // Fix paths for assets if needed
    document.addEventListener('DOMContentLoaded', function() {
      // Fix CSS links
      document.querySelectorAll('link[rel="stylesheet"]').forEach(function(link) {
        if (link.getAttribute('href').startsWith('/') && !link.getAttribute('href').startsWith('//')) {
          link.setAttribute('href', '.' + link.getAttribute('href'));
        }
      });
      
      // Fix script sources
      document.querySelectorAll('script[src]').forEach(function(script) {
        if (script.getAttribute('src').startsWith('/') && !script.getAttribute('src').startsWith('//')) {
          script.setAttribute('src', '.' + script.getAttribute('src'));
        }
      });
      
      // Fix images
      document.querySelectorAll('img[src]').forEach(function(img) {
        if (img.getAttribute('src').startsWith('/') && !img.getAttribute('src').startsWith('//')) {
          img.setAttribute('src', '.' + img.getAttribute('src'));
        }
      });
    });
  }
})();
