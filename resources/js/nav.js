document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("navbar-toggle").addEventListener("click", function() {
        var nav = document.getElementById("nav-content");
        if (nav.style.display !== 'block') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    });
});
