$(document.body).on('click', function(e) {
    window.parent.postMessage(e, "*lju.me");
    console.log("click detected!");
});
