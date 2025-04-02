//counter
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



//scroll arrow btn
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

// AOS Animation
AOS.init({
    duration: 1000,
    once: true 
});

// about page card slider
document.addEventListener("DOMContentLoaded", function () {
    let myCarousel = new bootstrap.Carousel(document.getElementById('cardSlider'), {
        interval: 2000,
        ride: 'carousel'
    });
});

// about page form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
});

// blog section
const blogs = [
    {
        title: "Conquering Consistency: How to Make Exercise a Habit You Love",
        image: "./image/blogimg-2.jpg",
        category: "Exercise",
        date: "Jun 28, 2024",
        author: "Benjamin",
        authorImage: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        title: "Weight Loss: A Sustainable Approach for a Healthier You",
        image: "./image/blogimg-1.jpg",
        category: "Weight Loss",
        date: "Jun 26, 2024",
        author: "Jessica",
        authorImage: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        title: "Fuel Your Fitness: a guid to nutrition for peak performance",
        image: "./image/blogimg-3.jpg",
        category: "Nutrition",
        date: "Jun 23, 2024",
        author: "Benjamin",
        authorImage: "https://randomuser.me/api/portraits/women/1.jpg"
    }
];
const blogContainer = document.getElementById("blogContainer");
blogs.forEach(blog => {
    const blogHTML = `
        <div class="col-md-6 mb-4">
            <div class="blog-card shadow">
                <img src="${blog.image}" class="img-fluid" alt="Blog Image">
                <span class="blog-category">${blog.category}</span>
                <div class="blog-content">
                    <h5>${blog.title}</h5>
                    <div class="blog-meta">
                        <span>📅 ${blog.date} | </span>
                        <span>👤 ${blog.author}</span>
                        <img src="${blog.authorImage}" alt="Author">
                    </div>
                </div>
            </div>
        </div>
    `;
    blogContainer.innerHTML += blogHTML;
});


// text animation
function animateText(element, direction) {
    let speed = 2; // Speed adjust karne ke liye value change karein
    let position = direction === "left" ? -100 : window.innerWidth;
    function move() {
        if (direction === "left") {
            position += speed;
            if (position > window.innerWidth) position = -element.offsetWidth;
        } else {
            position -= speed;
            if (position < -element.offsetWidth) position = window.innerWidth;
        }
        element.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(move);
    }
    move();
}

document.addEventListener("DOMContentLoaded", function() {
    animateText(document.getElementById("leftToRight"), "left");
    animateText(document.getElementById("rightToLeft"), "right");
});

//footer
document.getElementById("year").textContent = new Date().getFullYear();
