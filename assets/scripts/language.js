document.addEventListener('DOMContentLoaded', function () {
    // Check if language preference is already stored
    var savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        toggleLanguage(savedLanguage); // Apply stored language preference
    } else {
        // If no language preference is stored, default to English
        toggleLanguage('en');
    }
});

function toggleLanguage(language) {
    var langPtElements = document.querySelectorAll('.lang-pt');
    var langEnElements = document.querySelectorAll('.lang-en');

    var langPtButton = document.getElementById('Lang-pt');
    var langEnButton = document.getElementById('Lang-en');

    if (language === 'pt') {
        // Set visibility for Portuguese elements
        langPtElements.forEach(function (element) {
            element.style.display = 'block';
        });

        // Set visibility for English elements
        langEnElements.forEach(function (element) {
            element.style.display = 'none';
        });

        // Add underline to Portuguese button
        langPtButton.classList.add('underline');
        // Remove underline from English button
        langEnButton.classList.remove('underline');
    } else if (language === 'en') {
        // Set visibility for English elements
        langEnElements.forEach(function (element) {
            element.style.display = 'block';
        });

        // Set visibility for Portuguese elements
        langPtElements.forEach(function (element) {
            element.style.display = 'none';
        });

        // Add underline to English button
        langEnButton.classList.add('underline');
        // Remove underline from Portuguese button
        langPtButton.classList.remove('underline');
    }

    // Store language preference in localStorage
    localStorage.setItem('language', language);
}