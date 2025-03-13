/* ========================================================================================================
// Урок от 10 марта 2025. Домашнее задание.
// ========================================================================================================

// ========================================================================================================
// Курс:  Разработка интерфейса на JavaScript
// ========================================================================================================

// ========================================================================================================
// Дисциплина: Основы  JavaScript
// ========================================================================================================

// ========================================================================================================
// Домашнее задание №18: Обработка событий на JavaScript.
// ========================================================================================================

// ========================================================================================================
// Решите данные задачи:
// --------------------------------------------------------------------------------------------------------
// 1. Напишите функцию, которая по нажатию кнопки печатает в специальном блоке Цитату.
//    Изначально с бэкенда приходит 10-20 цитат.
// --------------------------------------------------------------------------------------------------------
// 2. Напишите функцию, которая меняет цвет фигуры (5 цветов приходят с того же бэкенда) по движению мыши.
// ===================================================================================================== */


// Задание 1 — Вывод alert по нажатию на кнопку
const btnAlert = document.getElementById('btn-alert');
btnAlert.addEventListener('click', () => {
  alert('Кнопка нажата!');
});

// Задание 2 — Увеличение числа в <span>
const btnIncrement = document.getElementById('btn-increment');
const counter = document.getElementById('counter');

btnIncrement.addEventListener('click', () => {
  counter.textContent = parseInt(counter.textContent) + 1;
});

// Задание 3 — Изменение фона по клику на кнопку
const btnChangeBg = document.getElementById('btn-change-bg');

btnChangeBg.addEventListener('click', () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'yellow' ? '#f9f9f9' : 'yellow';
});

// Задание 4 — Удаление обработчика после первого вызова
const btnRemoveHandler = document.getElementById('btn-remove-handler');

const handleClick = () => {
  alert('Сообщение после первого нажатия!');
  btnRemoveHandler.removeEventListener('click', handleClick);
};

btnRemoveHandler.addEventListener('click', handleClick);

// Задание 5 и 6 — Добавление и удаление обработчика события
const btnAddHandler = document.getElementById('btn-add-handler');
const btnDeleteHandler = document.getElementById('btn-delete-handler');
const target = document.getElementById('target');

const showMessage = () => {
  alert('Элемент нажат!');
};

btnAddHandler.addEventListener('click', () => {
  target.addEventListener('click', showMessage);
  alert('Обработчик добавлен!');
});

btnDeleteHandler.addEventListener('click', () => {
  target.removeEventListener('click', showMessage);
  alert('Обработчик удалён!');
});



