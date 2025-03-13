// Функция для раскрытия/скрытия аккордеона
function toggleAccordion(id) {
    const content = document.getElementById(`accordion-content-${id}`);
    const icon = document.querySelector(`#accordion-content-${id}`).previousElementSibling.querySelector('.sportiverse-accordion-icon');
    
    content.classList.toggle('open');
    icon.textContent = content.classList.contains('open') ? '➖' : '➕';
}