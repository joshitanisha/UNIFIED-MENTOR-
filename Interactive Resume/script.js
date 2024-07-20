document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const toggleIcon = document.getElementById('toggleIcon');
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.textContent = '🌜';
    } else {
        toggleIcon.textContent = '🌞';
    }
});

document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('certificationUpload').click();
});

document.getElementById('certificationUpload').addEventListener('change', function(event) {
    const files = event.target.files;
    if (files.length > 0) {
        const file = files[0];
        const listItem = document.createElement('li');
        listItem.textContent = file.name;
        document.getElementById('certificationList').appendChild(listItem);
    }
});
function showSlide(slideId) {
    var slides = document.getElementsByClassName('slide');
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    document.getElementById(slideId).classList.add('active');
}

// Show the first slide by default
document.addEventListener('DOMContentLoaded', function() {
    showSlide('slide1');
});
// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}




