// 1. Header Style Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// 3. Scroll Reveal Animation
window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active');
        }
    }
}
reveal(); // Trigger once on load

// 4. Modal Lightbox
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
function openModal(element) {
    modal.style.display = "flex";
    modalImg.src = element.querySelector('img').src;
}
function closeModal() {
    modal.style.display = "none";
}

// 5. WhatsApp Widget Toggle (Click to Open)
const waTrigger = document.getElementById('waTrigger');
const waWrapper = document.getElementById('waWidget');

if (waTrigger) {
    waTrigger.addEventListener('click', function() {
        waWrapper.classList.toggle('active');
    });
    
    // Opsional: Tutup jika klik di luar widget
    document.addEventListener('click', function(event) {
        if (!waWrapper.contains(event.target)) {
            waWrapper.classList.remove('active');
        }
    });
}