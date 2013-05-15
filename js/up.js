$(document.body).on('click', function(e) {
    window.parent.postMessage(e);
    console.log("click detected!");
});
