/* =========================================================
   MADEMATICS — INTERACTIONS
   Mahmoud Madi · Pure Mathematics
   ========================================================= */


/* =========================================================
   01. MODALS
   ========================================================= */

const modalButtons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll("[data-close-modal]");


function openModal(modalId) {
    const modal = document.getElementById(modalId);

    if (!modal) {
        return;
    }

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    const closeButton = modal.querySelector(".modal-close");

    if (closeButton) {
        setTimeout(() => {
            closeButton.focus();
        }, 50);
    }
}


function closeModal(modal) {
    if (!modal) {
        return;
    }

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");
}


function closeAllModals() {
    modals.forEach((modal) => {
        closeModal(modal);
    });
}


/* Open modal when a View Details button is clicked */

modalButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const modalId = button.getAttribute("data-modal");

        closeAllModals();
        openModal(modalId);

    });

});


/* Close modal when overlay or close button is clicked */

closeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const modal = button.closest(".modal");

        closeModal(modal);

    });

});


/* =========================================================
   02. ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeAllModals();
    }

});


/* =========================================================
   03. CLOSE MODAL BY CLICKING OUTSIDE
   ========================================================= */

modals.forEach((modal) => {

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {
            closeModal(modal);
        }

    });

});


/* =========================================================
   04. NAVIGATION
   ========================================================= */

const navigationLinks = document.querySelectorAll(".main-nav a");


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        /*
         * If a modal is somehow open while navigating,
         * close it first.
         */

        closeAllModals();

    });

});


/* =========================================================
   05. PREVENT BROKEN PLACEHOLDER EMAIL
   ========================================================= */

const emailLink = document.querySelector(
    'a[href="mailto:YOUR_EMAIL@example.com"]'
);


if (emailLink) {

    emailLink.addEventListener("click", (event) => {

        /*
         * The email is intentionally a placeholder for now.
         * Prevent the browser from attempting to send an email
         * until the real address has been added.
         */

        event.preventDefault();

    });

}


/* =========================================================
   06. SIMPLE SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-introduction, .about-facts, " +
    ".achievement-card, .teaching-main, .teaching-card, " +
    ".research-introduction, .research-topics, .work-card, " +
    ".books-introduction, .resource-list, .contact-box"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observerInstance.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.08
        }
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("revealed");
    });

}


/* =========================================================
   07. CURRENT YEAR
   ========================================================= */

const copyright = document.querySelector(".copyright");


if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.textContent = `© ${currentYear} Mahmoud Madi`;

}


/* =========================================================
   08. FINISH
   ========================================================= */

console.log("Madematics website loaded successfully.");
