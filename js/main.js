
$(document).ready(function(){
    // cursor
    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".sidebar__a, .header__link");

    window.addEventListener('mousemove', cursor);

    function cursor(e){
        console.log(e);
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";

    }
    navLinks.forEach(link => {
        link.addEventListener('mouseleave', () =>{
            mouseCursor.classList.remove("link-grow");
            link.classList.remove('hovered-link');
        });
        link.addEventListener('mouseover', () =>{
            mouseCursor.classList.add("link-grow");
            link.classList.add('hovered-link');
        });
    });
    // cursor


    // button-share
    $('.share__button').click(function(){
        $('.share__social').toggleClass('active');
    });
    // button-share


    $(".header__burger-inner").click(function(){
        $("body").toggleClass("active");
        $(".header__burger").toggleClass("active");
        $(".sidebar").toggleClass("active");
        // $(".overlay__main").toggleClass("active");
        $("main").toggleClass("active");
        
    });
        $(".popup__item").click(function(){
        $("body").toggleClass("active");
    });
        
                    

// carousel
    $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
        });
    });
// carousel
}); 
