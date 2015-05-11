(function($) {
    $(document).ready(function() {
        $('a#nav-link').click(function(event) {
            event.preventDefault();
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            $('a#nav-link').removeClass('active');
            $(this).addClass('active');
            $('html, body').stop().animate({
                scrollTop: dest
            }, 500, 'easeInOutQuint');
        });
        $('.hover-scale').mouseenter(function() {
            $(this).transition({
                scale: 1.1
            }, {
                queue: false
            });
        });
        $('.hover-scale').mouseleave(function() {
            $(this).transition({
                scale: 1
            }, {
                queue: false
            });
        });
        $('span#typed').typed({
            strings: ["I am a programmer.", 
                        "I am a student.", 
                        "I am a hacker.", 
                        "I like music.", 
                        "I like to eat food.",
                        "I enjoy photography."],
            typeSpeed: 40,
            loop: true,
            backSpeed: 20,
            startDelay: 20
        });
    });
})(jQuery)
