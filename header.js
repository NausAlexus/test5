let lastScrollTop = 0;
const header = document.querySelector('.header');

const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
};

// Check if the screen width is greater than 460 pixels
const checkScreenWidthAndInitiateScrollHandler = () => {
    if (window.innerWidth > 460) {
        window.addEventListener('scroll', handleScroll);
    } else {
        // Remove the scroll event listener if width is 460 or less
        window.removeEventListener('scroll', handleScroll);
        // Ensure header is shown if the screen is resized to 460 or less
        header.classList.remove('hidden');
    }
};

// Initial check
checkScreenWidthAndInitiateScrollHandler();

// Add resize event listener to handle window resizing
window.addEventListener('resize', checkScreenWidthAndInitiateScrollHandler);