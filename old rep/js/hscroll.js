$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        // multiplying by 40 is the sensitivity, 
        // increase to scroll faster.
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});