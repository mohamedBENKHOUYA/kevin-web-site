
import './style.css';  

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector('.primary-navigation');

navToggle.onclick = function nfe(e) {
  const isExpanded = primaryNav.toggleAttribute('data-visible');
  navToggle.setAttribute('aria-expanded', isExpanded);
}  