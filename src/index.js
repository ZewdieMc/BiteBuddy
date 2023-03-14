import './style.scss';
import logo from './assets/images/bitebuddy.png';
import populateMeals from './modules/populateMeals.js';

const logoContainer = document.getElementById('bitebuddy-logo');
logoContainer.src = logo;
populateMeals();