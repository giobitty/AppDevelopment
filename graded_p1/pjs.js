// NUMBERS

document.addEventListener('DOMContentLoaded', function() {
    // collecting the elements from the page
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const numberText = document.getElementById('number-text');
    const hearKoreanBtn = document.getElementById('hear-korean');
    const closeModal = document.getElementById('close-modal');

    // Speech Rate to
    const speechRate = 0.4; 

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const number = this.getAttribute('data-number');
            const numberKorean = this.getAttribute('data-number-korean');

            // Display the modal with the English number
            numberText.textContent = number;
            modal.style.display = 'block';

            // Announce the number in English with adjusted rate
            const englishUtterance = new SpeechSynthesisUtterance(number);
            englishUtterance.lang = 'en-US'; // English language
            englishUtterance.rate = speechRate; // Adjust speech rate
            window.speechSynthesis.speak(englishUtterance);

            // Set up the button to announce the number in Korean with adjusted rate
            hearKoreanBtn.onclick = function() {
                const koreanUtterance = new SpeechSynthesisUtterance(numberKorean);
                koreanUtterance.lang = 'ko-KR'; // Korean language
                koreanUtterance.rate = speechRate; // Adjust speech rate
                window.speechSynthesis.speak(koreanUtterance);
            };
        });
    });

    // Close modal when clicking on close button
    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside of modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
