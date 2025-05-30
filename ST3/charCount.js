document.addEventListener("DOMContentLoaded", function () {
    var postContent = document.getElementById("postContent");
    var charCount = document.getElementById("charCount");
    var warningMsg = document.getElementById("warningMsg");
    var maxChars = 200;
    postContent.addEventListener("input", function () {
        var currentLength = postContent.value.length;
        if (currentLength > maxChars) {
            postContent.value = postContent.value.slice(0, maxChars);
            currentLength = maxChars;
        }
        charCount.textContent = "".concat(currentLength);
        if (currentLength >= maxChars) {
            warningMsg.textContent = ("Limit reahced 200");
        }
        else {
            warningMsg.textContent = "";
        }
    });
});
