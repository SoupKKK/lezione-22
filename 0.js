function rimuoviTutteLeCard() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'none';
    });
}


function aggiungiBadgeHot() {
    const welcomeSummerCards = document.querySelectorAll('.first .card');
    welcomeSummerCards.forEach(card => {
        const badge = document.createElement('span');
        badge.textContent = 'HOT';
        badge.classList.add('badge', 'bg-danger', 'position-absolute', 'top-0', 'end-0', 'mt-2', 'me-2');
        card.style.position = 'relative';
        card.appendChild(badge);
    });
}