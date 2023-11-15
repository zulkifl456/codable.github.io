$(document).ready(function () {
    // Existing smooth scrolling code
    $(".nav-links a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Slideshow functionality
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = $(".slideshow-img");
        var dots = $(".dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active-dot", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active-dot";
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    // Update header transparency on scroll
   /* $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        // Set the transparency based on the scroll position
        var headerOpacity = Math.min(0.8, scroll / 300); // Adjust the divisor for the desired scroll range
        $("header").css("background-color", "rgba(51, 51, 51, " + headerOpacity + ")");
    });*/

    function toggleMobileMenu() {
        $(".mobile-nav").slideToggle();
    }
});
