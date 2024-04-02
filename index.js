document.addEventListener('DOMContentLoaded', function () {
    // This function will be executed after the DOM content has loaded
    const paragraph = document.getElementById('text');
    if (paragraph) {
        paragraph.textContent = "This is really cool!";
    }
});
