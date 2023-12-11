document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('.expandable-header');
    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            this.parentNode.classList.toggle('expanded');
        });
    });
});