document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
        const imageUrls = ["/Assets/OnlyCars/Gallery/1.png", "/Assets/OnlyCars/Gallery/2.png", "/Assets/OnlyCars/Gallery/3.png", "/Assets/OnlyCars/Gallery/4.jpg"];
        imageUrls.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    });
    const galleryImages = document.querySelectorAll(".gallery img");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.getElementById("closeBtn");
    // const downloadBtn = document.getElementById("downloadBtn");
    galleryImages.forEach((img) => {
        img.addEventListener("click", function () {
            modal.classList.add("active");
            const fullSizeSrc = this.src.replace("/thumb/", "/fullsize/");
            modalImg.src = fullSizeSrc;
            // downloadBtn.href = this.src.replace("/thumb/", "/raw/");
        });
    });
    modal.addEventListener("click", function () {
        modal.classList.remove("active");
    });
    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        modal.classList.remove("active");
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.classList.remove("active");
        }
    });


    function openLink(url) { window.open(url, "_blank"); }
    document.querySelectorAll(".sponsor").forEach((sponsor) => {
        sponsor.addEventListener("click", function () {
            openLink(this.dataset.url);
        });
    });
});
