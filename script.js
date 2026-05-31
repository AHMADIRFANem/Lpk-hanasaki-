// ====================================
// HANASAKI GAKKOU PREMIUM JAVASCRIPT
// ====================================

// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1000);

});

// HEADER SCROLL

const header =
    document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// MOBILE MENU

const menuBtn =
    document.getElementById("menu-btn");

const navbar =
    document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menuBtn.innerHTML =
            '<i class="fas fa-times"></i>';

    } else {

        menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

    }

});

// CLOSE MENU AFTER CLICK

document.querySelectorAll("#navbar a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuBtn.innerHTML =
                '<i class="fas fa-bars"></i>';

        });

    });

// TYPING EFFECT

const typing =
    document.querySelector(".typing");

if (typing) {

    const words = [

        "日本で働こう",
        "夢を叶えよう",
        "未来を作ろう",
        "頑張りましょう",
        "日本語を学びましょう"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord =
            words[wordIndex];

        if (!deleting) {

            typing.textContent =
                currentWord.substring(
                    0,
                    charIndex++
                );

            if (charIndex >
                currentWord.length) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;

            }

        } else {

            typing.textContent =
                currentWord.substring(
                    0,
                    charIndex--
                );

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(
            typeEffect,
            deleting ? 50 : 120
        );

    }

    typeEffect();

}

// COUNTER

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter =
                    entry.target;

                const target =
                    parseInt(
                        counter.dataset.target
                    );

                let count = 0;

                const speed =
                    target / 100;

                const update = () => {

                    count += speed;

                    if (count < target) {

                        counter.innerText =
                            Math.ceil(count);

                        requestAnimationFrame(update);

                    } else {

                        counter.innerText =
                            target;

                    }

                };

                update();

                counterObserver.unobserve(counter);

            }

        });

    });

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// REVEAL ANIMATION

const reveals =
    document.querySelectorAll(
        ".reveal"
    );

const revealElements = () => {

    reveals.forEach(item => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            item.classList.add("show");

        }

    });

};

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();

// ACTIVE NAVIGATION

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
                .includes(current)
        ) {

            link.classList.add("active");

        }

    });

});

// BACK TO TOP BUTTON

const topBtn =
    document.createElement("button");

topBtn.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// HERO PARALLAX

const hero =
    document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let scroll =
        window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY =
            scroll * 0.5 + "px";

    }

});

// FLOATING WA PULSE

const waButton =
    document.querySelector(".wa-float");

if (waButton) {

    setInterval(() => {

        waButton.classList.add("pulse");

        setTimeout(() => {

            waButton.classList.remove("pulse");

        }, 1000);

    }, 3000);

}

// SMOOTH SCROLL

document.querySelectorAll(
    'nav a'
).forEach(anchor => {

    anchor.addEventListener(
        'click',
        function (e) {

            e.preventDefault();

            document.querySelector(
                this.getAttribute('href')
            ).scrollIntoView({

                behavior: 'smooth'

            });

        });

});

// AUTO YEAR

const year =
    document.querySelector(".year");

if (year) {

    year.innerText =
        new Date().getFullYear();

}

// SCROLL PROGRESS BAR

const progress =
    document.createElement("div");

progress.classList.add("progress-bar");

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -
        window.innerHeight;

    const progressHeight =

        (window.pageYOffset /
            totalHeight) * 100;

    progress.style.width =
        progressHeight + "%";

});

// GALLERY HOVER EFFECT

const galleryImages =
    document.querySelectorAll(
        ".gallery-grid img"
    );

galleryImages.forEach(img => {

    img.addEventListener(
        "mouseenter",
        () => {

            img.style.transform =
                "scale(1.08)";

        });

    img.addEventListener(
        "mouseleave",
        () => {

            img.style.transform =
                "scale(1)";

        });

});

// CONSOLE BRAND

console.log(
    "%cHANASAKI GAKKOU 🇯🇵",
    "font-size:25px;color:#d90429;font-weight:bold;"
);