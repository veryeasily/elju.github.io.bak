$(document.body).on('click', function(e) {
    window.parent.postMessage('clicked', 'http://elju.github.io');
    console.log("click detected!");
});
