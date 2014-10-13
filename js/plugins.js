// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


$(function() {
    $('.main-nav').waypoint('sticky');

    $('.js-waypoint').waypoint(function() {
        $('.main-nav a.active').removeClass('active');
        console.log(this.id);
        $('.main-nav a[href="#' + this.id + '"').addClass('active');
    }, { offset: 100 });

    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
        return false;
      }
    }
    });

    $('.title,code,.page-footer').each(function() {
        var original = $(this).html();
        // use .shortnameToImage if only converting shortnames (for slightly better performance)
        var converted = emojione.unicodeToImage(original);
        $(this).html(converted);
    });
});
