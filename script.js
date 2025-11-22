document.addEventListener("DOMContentLoaded", function() {
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.track-item, .merch-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        observer.observe(el);
    });
});

function handleForm(e) {
    e.preventDefault();
    const btn = document.querySelector('.notify-btn');
    const input = document.querySelector('.notify-input');
    
    btn.innerHTML = "DONE";
    input.value = "";
    input.placeholder = "YOU ARE ON THE LIST";
    
    setTimeout(() => {
        btn.innerHTML = "JOIN";
        input.placeholder = "EMAIL ADDRESS";
    }, 3000);
}
