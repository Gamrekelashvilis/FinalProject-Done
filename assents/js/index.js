
document.querySelector(".left").addEventListener("mouseenter", () => {
    document.querySelector(".container").classList.add("hover-left");
});

document.querySelector(".left").addEventListener("mouseleave", () => {
    document.querySelector(".container").classList.remove("hover-left");
});

document.querySelector(".right").addEventListener("mouseenter", () => {
    document.querySelector(".container").classList.add("hover-right");
});

document.querySelector(".right").addEventListener("mouseleave", () => {
    document.querySelector(".container").classList.remove("hover-right");
});



