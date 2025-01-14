// Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Collecting form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert('Thank you for reaching out, ' + name + '! Your message has been sent.');
        // Reset the form after submission
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Smooth scrolling for navigation links
const links = document.querySelectorAll('header nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
