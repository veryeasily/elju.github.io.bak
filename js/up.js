$(document.body).on('click', function(e) {
    window.parent.postMessage('clicked', '*');
    console.log("click detected!");
});
