// COMMON
document.addEventListener("DOMContentLoaded", function() {
    fetch('html/common/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Header').innerHTML = data;
        });
});
