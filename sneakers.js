var tl = gsap.timeline();

tl.from(".navbar",{
    y:-50,
    duration:1,
    opacity:0,
    delay:1
})
tl.from(".items",{
    y:-34,
    duration:1,
    opacity:0,
    stagger:0.5,
})
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-icon").addEventListener("click", function() {
        document.querySelector(".list").classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let sets = document.querySelectorAll(".set1, .set2, .set3");
    let index = 0;

    function showNextSet() {
        // Hide all sets
        sets.forEach((set) => {
            set.style.opacity = "0";
            set.style.transform = "scale(0.9)";
            set.style.zIndex = "0";
        });

        // Show the current set
        sets[index].style.opacity = "1";
        sets[index].style.transform = "scale(1)";
        sets[index].style.zIndex = "1";

        // Move to the next set
        index = (index + 1) % sets.length;
    }

    // Initialize first display
    showNextSet();

    // Change set every 3 seconds
    setInterval(showNextSet, 3000);
});
gsap.from(".tagline",{
    x:400,
    opacity:0,
    scrollTrigger:{
        duration:1,
        delay:1,
        scroller:"body",
        trigger:".video",
        scrub: true,
    }
})
document.querySelectorAll(".hover-area").forEach((area, index) => {
    const image = document.querySelector(`.img${index + 1}`);
    
    area.addEventListener("mouseenter", () => {
        image.style.display = "block";
    });

    area.addEventListener("mouseleave", () => {
        image.style.display = "none";
    });
});

