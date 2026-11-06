document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("navbar-placeholder");

    if (!placeholder) return;

    fetch("/components/navbar.html")
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch navbar");
            return response.text();
        })
        .then(html => {
            placeholder.innerHTML = html;

            const currentPath = window.location.pathname;
            const navLinks = placeholder.querySelectorAll("a");

            navLinks.forEach(link => {
                const linkPath = new URL(link.href, window.location.origin).pathname;

                if (linkPath === currentPath) {
                    link.classList.add("active");
                }
            });
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
});