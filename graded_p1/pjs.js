document.addEventListener('DOMContentLoaded', function() {
    // Collecting the elements from the page
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const contentText = document.getElementById('content-text');
    const hearKoreanBtn = document.getElementById('hear-korean');
    const closeModal = document.getElementById('close-modal');

    // Speech Rate
    const speechRate = 0.4;

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const number = this.getAttribute('data-number');
            const numberKorean = this.getAttribute('data-number-korean');
            const shape = this.getAttribute('data-shape');
            const shapeKorean = this.getAttribute('data-shape-korean');

            let textContent = '';
            let koreanContent = '';

            if (number) {
                textContent = number;
                koreanContent = numberKorean;
            } else if (shape) {
                textContent = shape;
                koreanContent = shapeKorean;
            }

            // Display the modal with the English content
            contentText.textContent = textContent;
            modal.style.display = 'block';

            // Announce the content in English with adjusted rate
            const englishUtterance = new SpeechSynthesisUtterance(textContent);
            englishUtterance.lang = 'en-US';
            englishUtterance.rate = speechRate;
            window.speechSynthesis.speak(englishUtterance);

            // Set up the button to announce the content in Korean with adjusted rate
            hearKoreanBtn.onclick = function() {
                const koreanUtterance = new SpeechSynthesisUtterance(koreanContent);
                koreanUtterance.lang = 'ko-KR';
                koreanUtterance.rate = speechRate;
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
