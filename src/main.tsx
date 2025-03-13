
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './hide-lovable-badge.css'

// Function to remove Lovable badge
const removeLovableBadge = () => {
  const badgeSelectors = [
    '#lovable-badge',
    'div[id^="lovable-badge-"]',
    'div[class*="lovable-badge"]',
    'div[data-testid="lovable-badge"]',
    '[aria-label*="Lovable"]',
    '[aria-label*="lovable"]',
    'div[style*="position: fixed"][style*="bottom"]',
    'div[style*="position: fixed"][style*="right"]'
  ];
  
  badgeSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (el) el.remove();
    });
  });
  
  // Remove all fixed position divs except headers and navs
  document.querySelectorAll('div[style*="position: fixed"]').forEach(el => {
    if (!el.closest('header') && !el.closest('nav')) {
      el.remove();
    }
  });
};

// Run badge removal immediately
removeLovableBadge();

// Run badge removal after DOM is loaded
document.addEventListener('DOMContentLoaded', removeLovableBadge);

// Run badge removal periodically
setInterval(removeLovableBadge, 100);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
