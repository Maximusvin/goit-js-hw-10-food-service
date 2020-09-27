import menu from '../menu.json';
import templateMenu from '../templates/menu.hbs';

const menuRef = document.querySelector('.js-menu');

const html = templateMenu(menu);

menuRef.insertAdjacentHTML('beforeend', html);
