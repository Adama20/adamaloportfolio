
/**
 * Utility to forcefully remove Lovable badges and fixed-position elements
 */
 
// Function to remove badges and fixed elements
export function removeBadges() {
  // List of selectors to target for removal
  const selectors = [
    '#lovable-badge', 
    'div[id^="lovable-badge-"]',
    'div[class*="lovable-badge"]',
    'div[data-testid="lovable-badge"]',
    '[aria-label*="Lovable"]',
    '[aria-label*="lovable"]',
    '[title*="Lovable"]',
    '[title*="lovable"]',
    '[class*="lovable-"]',
    '[id*="lovable-"]',
    'div[style*="z-index: 999999"]',
    'div[style*="position: fixed"][style*="bottom"]',
    'div[style*="position: fixed"][style*="right"]',
    'div[style*="position: fixed"][style*="z-index"]',
    'a[href*="lovable.ai"]',
    'a[href*="lovable.dev"]',
    'a[href*="gpteng"]',
    'a[href*="gptengineer"]'
  ];
  
  // Remove each matching element
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (el) el.remove();
    });
  });
  
  // Remove all fixed position divs except those in headers and navs
  document.querySelectorAll('div[style*="position: fixed"]').forEach(el => {
    if (!el.closest('header') && !el.closest('nav')) {
      el.remove();
    }
  });
  
  // Remove all bottom-right fixed elements
  document.querySelectorAll('div[style*="bottom: 0"][style*="right: 0"]').forEach(el => {
    el.remove();
  });
  
  // Remove any iframe elements
  document.querySelectorAll('body > iframe').forEach(el => {
    el.remove();
  });
}

// Initialize the remover
export function initBadgeRemover() {
  // Run immediately
  removeBadges();
  
  // Set up interval to continuously check and remove
  const removalInterval = setInterval(removeBadges, 100);
  
  // Set up mutation observer to catch dynamically added elements
  const observer = new MutationObserver(mutations => {
    removeBadges();
    
    // Check specifically for style changes that might add position: fixed
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        const target = mutation.target;
        if (target.style && target.style.position === 'fixed') {
          if (!target.closest('header') && !target.closest('nav')) {
            target.remove();
          }
        }
      }
    });
  });
  
  // Start observing once DOM is fully loaded
  if (document.body) {
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'id']
    });
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class', 'id']
      });
    });
  }
  
  // Clean up function for if/when component unmounts
  return () => {
    clearInterval(removalInterval);
    observer.disconnect();
  };
}

// Auto-initialize when this script is loaded
if (typeof window !== 'undefined') {
  window.addEventListener('load', initBadgeRemover);
  // Also run on route changes if using single-page app
  window.addEventListener('hashchange', removeBadges);
}
