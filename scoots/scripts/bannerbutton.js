var today = new Date().getDay();



document.querySelector(".banner-exit").addEventListener("click", function() {
    this.closest(".banner").style.display = "none";
});
