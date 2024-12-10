document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
});

document.querySelectorAll('.menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('.menu').classList.remove('show');
    });
});