// NOTE: This example will not work locally in all browsers. 
// Please try it out on the website for the book http://javascriptbook.com/code/c08/
// or run it on your own server.
$(function() { // When the DOM is ready

    /*var times; // Declare global variable*/
    $.ajax({
        beforeSend: function(xhr) { // Before requesting data
            if (xhr.overrideMimeType) { // If supported
                xhr.overrideMimeType("application/json"); // set MIME to prevent errors
            }
        }
    });

    // CLICK ON PRIMARY NAVIGATION
    $('.portfolio a').on('click', function(e) { // Click on nav
        e.preventDefault(); // Prevent loading
        var url = this.href; // Get URL to load

        $('.portfolio a.current').removeClass('current'); // Update nav
        $(this).addClass('current');

        $('#container').remove(); // Remove old part
        $('#content').load(url + ' #container').hide().fadeIn('slow'); // Add new
    });

});

$(function(){
 var shrinkHeader = 300;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('header').addClass('shrink');
        }
        else {
            $('header').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});