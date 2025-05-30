document.addEventListener("DOMContentLoaded", function () {
    var postContent = document.getElementById("postContent");
    var charCount = document.getElementById("charCount");
    var warningMsg = document.getElementById("warningMsg");
    // When the user types in the textarea
    postContent.addEventListener('input', function (e) {
        var length = postContent.value.length;
        if (length > 200) {
            postContent.value = postContent.value.slice(0, 200);
            warningMsg.textContent = "200 words reached";
            length = 200;
        }
        else {
            warningMsg.textContent = "";
        }
        // Show the number of characters used
        charCount.textContent = length + '/200';
    });
});
