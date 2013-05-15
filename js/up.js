$(document.body).on('click', function(e) {
    window.parent.postMessage('clicked', 'http://localhost:5000');
    console.log("click detected!");
});
