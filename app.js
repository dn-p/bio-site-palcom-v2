
document.addEventListener("DOMContentLoaded", function () {
    function addWideLineOnScroll(section, className, thresholdValue) {
        let observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        section.classList.add(className);
                    } else {
                        section.classList.remove(className);
                    }
                });
            },
            { threshold: thresholdValue } 
        );
        observer.observe(section);
    }

let registrationSection = document.querySelector(".registration");
let shortLinkSection = document.querySelector(".short-link");

if (registrationSection) {
    addWideLineOnScroll(registrationSection, "wide-line", 0.5); // Threshold untuk registration
}

if (shortLinkSection) {
    addWideLineOnScroll(shortLinkSection, "wide-line", 0.4); // Threshold untuk short link
}
});

const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Simpan preferensi ke localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "Dark Mode";
    }
});

// Cek preferensi pengguna saat halaman dimuat
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Light Mode";
}
