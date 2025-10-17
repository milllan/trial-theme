document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.nav-menu-container'); // Adjust if your structure is different

    if (mobileNavToggle && primaryNav) {
        mobileNavToggle.addEventListener('click', () => {
            const isVisible = primaryNav.style.display === 'block';
            primaryNav.style.display = isVisible ? 'none' : 'block';
            mobileNavToggle.setAttribute('aria-expanded', !isVisible);
        });
    }

    // You can add more interactivity here, like for a testimonial slider.
});