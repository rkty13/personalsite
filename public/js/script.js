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
                        "I play clarinet.",
                        "I am self-motivated.",
                        "I like music.",
                        "I love to learn.",
                        "I like to eat food.",
                        ],
            typeSpeed: 40,
            loop: true,
            backSpeed: 20,
            startDelay: 20
        });
    });
})(jQuery)
