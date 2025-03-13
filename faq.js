function toggleAnswer(id) {
    const answer = document.getElementById(`answer-${id}`);
    const icon = document.querySelector(`#answer-${id}`).previousElementSibling.querySelector('.sportiverse-faq-icon');
    
    answer.classList.toggle('open');
    icon.classList.toggle('open');
}