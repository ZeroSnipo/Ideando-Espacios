$(document).ready(function() {


    $(".titulo").inViewport(function(px) {

        if (px) {
            $(this).addClass("animated fadeInUp fast");
        }
    })

    $(".servicioWrapper").inViewport(function(px) {

        if (px) {
            $(this).addClass("animated fadeInUp");
        }
    })

    $("h3").inViewport(function(px) {

        if (px) {
            $(this).addClass("animated fadeInLeftBig");
        }
    })

    $(".rowMarcas img").inViewport(function(px) {

        if (px) {
            $(this).addClass("animated tada");
        }
    })


});

// Plugin @RokoCB :: Return the visible amount of px
// of any element currently in viewport.
// stackoverflow.com/questions/24768795/
;
(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i, el) {
            function visPx() {
                var H = $(this).height(),
                    r = el.getBoundingClientRect(),
                    t = r.top,
                    b = r.bottom;
                return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
            }
            visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));