const slider = document.getElementById('imageSlider');
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function showSlide(n) {
            slider.style.transform = `translateX(-${n * 300}px)`; // 300px is the width of each slide
        }


        function nextSlide() {
           currentSlide = (currentSlide + 1) % slides.length; //loop back to the start
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 3000); // Change image every 3 seconds