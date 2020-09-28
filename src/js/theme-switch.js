const refs = {
  themeSwitchRef: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const defaultTheme = Theme.LIGHT;
refs.themeSwitchRef.addEventListener('change', themeChanges);

// Ф-ция получения текущей темы с локалсторадж
function currentTemeLocalStorage() {
  return localStorage.getItem('currentTheme');
}
// Ф-ция записи текущей темы в локалсторадж
function changeLocalStorage(currentTheme) {
  localStorage.setItem('currentTheme', currentTheme);
}

// Ф-ция, пров. на наличие сохран.значения в сторадж: если оно есть, накидываем класс на body.
// Если оно еще и не LIGHT - то чекер переводим в true.
function initTheme(defaultTheme) {
  if (currentTemeLocalStorage()) {
    document.body.classList.add(currentTemeLocalStorage());
    if (currentTemeLocalStorage() !== defaultTheme) {
      refs.themeSwitchRef.checked = true;
    }
  }

  document.body.classList.add(defaultTheme);
}

// Ф-ция, где проверяем состояние чекера. Если true - то в сторадж записываем Theme.DARK и меняем класс на body.
// Если false  - то сохраняем дефолтную тему и меняем класс на body
function themeChanges() {
  if (refs.themeSwitchRef.checked) {
    changeLocalStorage(Theme.DARK);
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    changeLocalStorage(Theme.LIGHT);
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}

initTheme(defaultTheme);
