document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert header
    fetchAndInsert('html/common/header.html', 'Header');

    // Fetch and insert footer
    fetchAndInsert('html/common/footer.html', 'Footer');

    // Fetch and insert language selector
    fetchAndInsert('html/common/lang.html', 'Lang');
});

function fetchAndInsert(url, targetId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const targetElement = document.getElementById(targetId);
            const div = document.createElement('div');
            div.innerHTML = data;
            // Append the first child of the new div (the root element of the fetched HTML) to the target element
            targetElement.appendChild(div.firstChild);
            // You can execute additional logic or handle scripts here if necessary
        });
}