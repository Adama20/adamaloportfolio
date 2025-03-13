
// Badge remover utility
// This script aggressively removes any Lovable/GPTEngineer-related elements

// Define all the selectors we want to target
const badgeSelectors = [
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
  'body > div:last-of-type:not(#root)',
  'div[style*="position: fixed"][style*="bottom: 0"]',
  'div[style*="position: fixed"][style*="right: 0"]',
  'div[style*="position: fixed"][style*="left: 0"]',
  'div[style*="bottom:"][style*="right:"]',
  'div[style*="bottom:"][style*="left:"]',
  'div[style*="bottom:"][style*="z-index:"]',
  'div[style*="right:"][style*="z-index:"]',
  'a[href*="lovable.ai"]',
  'a[href*="lovable.dev"]',
  'a[href*="gpteng"]',
  'a[href*="gptengineer"]',
  '#lovable-editor-bubble',
  '[data-lovable-id]',
  '[data-gptengineer-id]',
  '[class^="__GPTEngineer"]',
  '[id^="__GPTEngineer"]',
  'div[style*="position: fixed"]',
  'iframe[src*="lovable"]',
  'iframe[src*="gpteng"]'
];

// Remove Lovable badge and related elements
const removeLovableBadge = () => {
  // Remove elements matching our selectors
  badgeSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (el && el !== document.getElementById('root') && 
          !el.closest('header') && !el.closest('nav')) {
        el.remove();
      }
    });
  });
  
  // Remove fixed position elements (except legitimate ones)
  document.querySelectorAll('div[style*="position: fixed"]').forEach(el => {
    if (!el.closest('header') && !el.closest('nav')) {
      el.remove();
    }
  });
  
  // Remove any script tags related to Lovable
  document.querySelectorAll('script[src*="lovable"], script[src*="gpteng"]').forEach(script => {
    if (script.getAttribute('src') !== "https://cdn.gpteng.co/gptengineer.js") {
      script.remove();
    }
  });
  
  // Remove dynamically added divs
  document.querySelectorAll('body > div:not(#root)').forEach(div => {
    if (div && div !== document.getElementById('root') && !div.id) {
      div.remove();
    }
  });
  
  // Remove any iframes
  document.querySelectorAll('body > iframe').forEach(iframe => iframe.remove());
};

// Execute badge removal
const initBadgeRemover = () => {
  // Run immediately 
  removeLovableBadge();
  
  // Run on DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeLovableBadge);
  }
  
  // Run periodically
  const interval = setInterval(removeLovableBadge, 50);
  
  // Use MutationObserver to watch for dynamic changes
  const observer = new MutationObserver(mutations => {
    removeLovableBadge();
    
    // Check specifically for newly added elements
    mutations.forEach(mutation => {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            if (node.style && node.style.position === 'fixed') {
              if (!node.closest('header') && !node.closest('nav')) {
                node.remove();
              }
            }
          }
        });
      }
    });
  });
  
  // Observe body for changes
  observer.observe(document.body, { 
    childList: true, 
    subtree: true, 
    attributes: true, 
    attributeFilter: ['style', 'class'] 
  });
  
  // Override createElement to block scripts
  const originalCreateElement = document.createElement;
  document.createElement = function(tagName) {
    const element = originalCreateElement.call(document, tagName);
    if (tagName.toLowerCase() === 'script') {
      const originalSetAttribute = element.setAttribute;
      element.setAttribute = function(name, value) {
        if (name === 'src' && value && (value.includes('lovable') || value.includes('gpteng')) && 
            value !== "https://cdn.gpteng.co/gptengineer.js") {
          return;
        }
        return originalSetAttribute.call(this, name, value);
      };
    }
    return element;
  };
  
  // Override setAttribute to prevent fixed positioning
  const originalSetAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(name, value) {
    if (name === 'style' && value && 
        value.includes('position: fixed') && 
        !this.closest('header') && 
        !this.closest('nav')) {
      return;
    }
    return originalSetAttribute.call(this, name, value);
  };
  
  return () => {
    clearInterval(interval);
    observer.disconnect();
  };
};

// Export our badge remover
export default initBadgeRemover;
