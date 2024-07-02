const cards = document.querySelectorAll('.card__inner');
cards.forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});

const h2Elements = document.querySelectorAll('.card__face--front h2');
h2Elements.forEach((h2, index) => {
    h2.textContent = questions[index];
});
const h2ElementsBack = document.querySelectorAll('.card__face--back h2');
h2ElementsBack.forEach((h2, index) => {
    h2.textContent = answers[index];
});

let currentIndex = 0; // Initialize with the first slide index

// Example next button logic
const nextButton = document.getElementById('arrowForward'); // Replace with your actual button ID
nextButton.addEventListener('click', () => {
    cards.forEach((card) => {
        card.classList.remove('is-flipped'); // Always show the question side
    });
    currentIndex = (currentIndex + 1) % numTimes;
    h2Elements[0].textContent = questions[currentIndex];
    h2ElementsBack[0].textContent = answers[currentIndex];
});

// Example previous button logic
const prevButton = document.getElementById('arrowBackward'); // Replace with your actual button ID
prevButton.addEventListener('click', () => {
    cards.forEach((card) => {
        card.classList.remove('is-flipped'); // Always show the question side
    });
    currentIndex = (currentIndex - 1 + numTimes) % numTimes;
    h2Elements[0].textContent = questions[currentIndex];
    h2ElementsBack[0].textContent = answers[currentIndex];
});

document.addEventListener("keydown", function(event) {
    if(event.key == "ArrowLeft") {
        cards.forEach((card) => {
            card.classList.remove('is-flipped'); // Always show the question side
        });
        currentIndex = (currentIndex - 1 + numTimes) % numTimes;
        h2Elements[0].textContent = questions[currentIndex];
        h2ElementsBack[0].textContent = answers[currentIndex];
    }
    else if(event.key == "ArrowRight") {
        cards.forEach((card) => {
            card.classList.remove('is-flipped'); // Always show the question side
        });
        currentIndex = (currentIndex + 1) % numTimes;
        h2Elements[0].textContent = questions[currentIndex];
        h2ElementsBack[0].textContent = answers[currentIndex];
    }
    else if (event.key === " ") { // Space key
        cards.forEach((card) => {
            card.classList.toggle('is-flipped');
        });
    }
});
