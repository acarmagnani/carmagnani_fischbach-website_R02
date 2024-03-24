// Set English as the default language if no preference is stored
document.addEventListener('DOMContentLoaded', function () {
    var selectedLanguage = localStorage.getItem('language');
    if (!selectedLanguage) {
        selectedLanguage = 'en';
        localStorage.setItem('language', selectedLanguage);
    }
    toggleLanguage(selectedLanguage);
});

function toggleLanguage(language) {
    var langPtElements = document.querySelectorAll('.lang-pt');
    var langEnElements = document.querySelectorAll('.lang-en');

    if (language === 'pt') {
        // Set visibility for Portuguese elements
        langPtElements.forEach(function (element) {
            element.style.display = 'block';
        });

        // Set visibility for English elements
        langEnElements.forEach(function (element) {
            element.style.display = 'none';
        });
    } else if (language === 'en') {
        // Set visibility for English elements
        langEnElements.forEach(function (element) {
            element.style.display = 'block';
        });

        // Set visibility for Portuguese elements
        langPtElements.forEach(function (element) {
            element.style.display = 'none';
        });
    }
}

// Function to update language preference and toggle language
function updateLanguagePreference(language) {
    localStorage.setItem('language', language);
    toggleLanguage(language);
}
