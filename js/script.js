document.addEventListener('DOMContentLoaded', function() {
    let slider = document.querySelector('.carousel-wrapper');

    createSlider(slider);

    function createSlider(slider) {
        slides = document.querySelectorAll('.picture-slider');
        if (!slides.length) return;

        let wrapper = document.querySelector('.carousel');

        const prevButton = document.querySelector('.left');
        const nextButton = document.querySelector('.right');
        
        let width = 0;
        function resize() {
            width = slider.scrollWidth;
        }
        resize();
        window.addEventListener('resize', resize);

        let activeSlide = 0;
        slides[activeSlide].classList.add('active');

        console.log(slides);
        console.log(wrapper);
        console.log(slider);
        if (prevButton)
        prevButton.addEventListener('click', function() {

                    slides[activeSlide].classList.remove('active');
                    activeSlide--;
                    if (activeSlide < 1) {

                        activeSlide = 0;
                        wrapper.style.transform = 'translate(-' + activeSlide*width + 'px, 0px)';
                        activeSlide = slides.length - 2;
                        slides[activeSlide].classList.add('active');

                    } else {

                        wrapper.style.transform = 'translate(-' + activeSlide*width + 'px, 0px)';

                    }
                    console.log(wrapper.style.transform);
                    slides[activeSlide].classList.add('active');
                });
        
       if (nextButton)
        nextButton.addEventListener('click', function() {
        
                    slides[activeSlide].classList.remove('active');
                    activeSlide++;
                    if (activeSlide > slides.length - 1) {
                        
                        activeSlide = 0;
                        wrapper.style.transform = 'translate(-' + activeSlide*width + 'px, 0px)';
                        slides[activeSlide].classList.add('active');

                    } else {
                        
                        wrapper.style.transform = 'translate(-' + activeSlide*width + 'px, 0px)';
                        
                    }
                    console.log(wrapper.style.transform);
                    slides[activeSlide].classList.add('active');
                    
                });
        
    }

    let infoBodyWrapper = document.querySelector('.info-body-wrapper');
    let langPut = document.querySelector('.lang-put');

    function divEqual(div1, div2) {
        if (!(div1 && div2)) return;
        console.log(div1.offsetWidth);
        console.log(div2.offsetWidth);

        if (div2.offsetWidth > div1.offsetWidth) {
            div2.style.width = div1.offsetWidth + 10 + 'px';
            console.log('done');
        }
        console.log(div1.offsetWidth);
        console.log(div2.offsetWidth);

    }

    function dinamicOpt() {
        divEqual(infoBodyWrapper, langPut);
    }

    dinamicOpt();

    window.addEventListener('resize', dinamicOpt);
});