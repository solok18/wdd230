var today = new Date().getDay();



document.querySelector(".banner-exit").addEventListener("click", function() {
    this.closest(".banner").style.display = "none";
});

if (today >= 1 && today <= 3) {
    document.getElementById("banner").style.display = "block";
};

