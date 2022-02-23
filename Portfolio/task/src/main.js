const buttons = document.getElementsByClassName("open-window");
for (let button of buttons) {
    button.addEventListener("click", function () {
        button.parentElement.getElementsByClassName("window")[0].style["z-index"] = "3";
    });
}

const closeButtons = document.getElementsByClassName("close");
for (let closeButton of closeButtons) {
    closeButton.addEventListener("click", function () {
        closeButton.parentElement.parentElement.getElementsByClassName("window")[0].style["z-index"] = "0";
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector(".hamburger-icon").addEventListener('click', function () {
        document.querySelector(".hamburger-icon").classList.toggle("hamburger-icon-opened");
        document.querySelector(".hamburger").classList.toggle("hamburger-visible");
    })
});
