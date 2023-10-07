let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

//by moving mouse roller it will move to left and right
scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'smooth';
});

nextBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 120;
})
backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 120;
});