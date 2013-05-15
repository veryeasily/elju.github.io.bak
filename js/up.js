$(document.body).on('click', function(e) {
    var testObj = new Object();
    testObj.something = 'yo!';
    window.parent.postMessage('click', 'http://localhost:5000');
    console.log("click detected!");
});
