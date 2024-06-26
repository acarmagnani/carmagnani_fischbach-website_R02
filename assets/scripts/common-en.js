document.addEventListener("DOMContentLoaded", function() {

    // COMMON
    fetchAndInsert('../html/common/header.html', 'Header', removeLangPT);
    fetchAndInsert('../html/common/footer.html', 'Footer', removeLangPT);
    fetchAndInsert('../html/common/lang-en.html', 'Lang', function() {
        // Call the function to modify the links
        modifyLangLinks();
    });

    // PAGES
    fetchAndInsert('../html/pages/index.html', 'Index', removeLangPT);
    fetchAndInsert('../html/pages/about.html', 'About', removeLangPT);
    fetchAndInsert('../html/pages/contact.html', 'Contact', removeLangPT);
    fetchAndInsert('../html/pages/lavandisca_bedroom.html', 'Lavandisca_bedroom', removeLangPT);
});

function fetchAndInsert(url, targetId, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const targetElement = document.getElementById(targetId);
            const div = document.createElement('div');
            div.innerHTML = data;
            // Append the first child of the new div (the root element of the fetched HTML) to the target element
            targetElement.appendChild(div.firstChild);
            // Call the callback function (if provided)
            if (callback) {
                callback();
            }
        });
}

function removeLangPT() {
    // Step 1: Use document.querySelectorAll() to select elements by class
    var elementsToRemove = document.querySelectorAll('.lang-pt');

    // Step 2: Use forEach() to iterate over the collection
    elementsToRemove.forEach(function(element) {
        // Step 3: Call remove() method on each element to remove it from the DOM
        element.remove();
    });
}

function modifyLangLinks() {
    // Get the file name from the current URL
    var fileName = window.location.pathname.split("/").pop();
    
    // Get the anchor elements
    var linkPt = document.getElementById("Lang-pt");
    var linkEn = document.getElementById("Lang-en");
    
    // Set the href attributes dynamically
    linkPt.href = "pt/" + fileName;
    linkEn.href = fileName;
}