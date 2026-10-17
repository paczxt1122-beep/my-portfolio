
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile navigation menu
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu after selecting a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// Display the current year automatically
document.getElementById("current-year").textContent =
    new Date().getFullYear();

// Copy the contact email to the clipboard
const copyButton = document.getElementById("copy-email");
const emailLink = document.getElementById("email-link");
const copyMessage = document.getElementById("copy-message");

copyButton.addEventListener("click", async () => {
    const email = emailLink.textContent.trim();

    try {
        await navigator.clipboard.writeText(email);
        copyMessage.textContent = "Email copied to clipboard!";
    } catch {
        copyMessage.textContent =
            "Copy unavailable. Select and copy the email manually.";
    }
});
