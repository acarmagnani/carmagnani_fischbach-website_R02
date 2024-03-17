 // Set English as the default language
 document.addEventListener('DOMContentLoaded', function () {
    toggleLanguage('en');
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