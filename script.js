document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.navbar');
    var trendingSection = document.getElementById('trending');

    // Get the offset top position of the trending section
    var trendingSectionOffset = trendingSection.offsetTop;

    window.addEventListener('scroll', function() {
        // Check if the scroll position is below the trending section
        if (window.scrollY > trendingSectionOffset) {
            navbar.style.backgroundColor = 'white';
        } else {
            navbar.style.backgroundColor = '#FFC017';
        }
    });
});