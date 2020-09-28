const themeSwitchRef = document.querySelector('.theme-switch__toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const changeTheme = currentTheme => document.body.classList.add(currentTheme);
const currentTemeLocalStorage = () => localStorage.getItem('currentTheme');
const changeLocalStorage = currentTheme =>
  localStorage.setItem('currentTheme', currentTheme);
const addChecked = () => (themeSwitchRef.checked = true);
const removeCheked = () => (themeSwitchRef.checked = false);

const enableDark = () => {
  currentTheme = Theme.DARK;
  document.body.classList.remove(Theme.LIGHT);
  changeTheme(currentTheme);
  changeLocalStorage(currentTheme);
  addChecked();
};

const enableWhite = () => {
  currentTheme = Theme.LIGHT;
  document.body.classList.remove(Theme.DARK);
  changeTheme(currentTheme);
  changeLocalStorage(currentTheme);
  removeCheked();
};

// Первоначальная проверка на запись в локалсторедж.
// Если там ничего нет, то добавляем светлую тему
if (!localStorage.hasOwnProperty('currentTheme')) {
  enableWhite();
}

// Меняем класс на боди в зависимости от текущей темы в локалсторедж.
changeTheme(currentTemeLocalStorage());

// Если тема темная - добавляем атрибут cheked
if (currentTemeLocalStorage() === Theme.DARK) {
  addChecked();
}

// Нажатие на чекбокс
themeSwitchRef.addEventListener('change', event => {
  currentTemeLocalStorage() === Theme.LIGHT ? enableDark() : enableWhite();
});
