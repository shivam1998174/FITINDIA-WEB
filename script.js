function animateCounter(id, target) {
    let count = 0;
    const element = document.getElementById(id);
    const interval = setInterval(() => {
        if (count >= target) {
            clearInterval(interval);
        } else {
            count += Math.ceil(target / 100);
            element.innerText = count + (target >= 100 ? 'k+' : '+');
        }
    }, 20);
}

document.addEventListener("DOMContentLoaded", function() {
    animateCounter("counter1", 456);
    animateCounter("counter2", 163);
    animateCounter("counter3", 13);
});




const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

AOS.init({
    duration: 1000, // Animation की Speed (ms में)
    once: true // Animation सिर्फ एक बार चले
});


//footer
document.getElementById("year").textContent = new Date().getFullYear();
