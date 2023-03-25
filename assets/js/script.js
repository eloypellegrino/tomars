const btnScrollToTop = document.querySelector('.btnScrollToTop');

// scroll to top of page when button clicked
btnScrollToTop.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});

// toggle 'scroll to top' based on scroll position
window.addEventListener('scroll', (e) => {
    btnScrollToTop.style.display = window.scrollY > 20 ? 'flex' : 'none';
});
