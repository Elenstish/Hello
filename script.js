var sidebar = $('.post-aside');
var btn = $('button.buttonmobile');
var maxFont = 24;
var minFont = 8;
var downFont = $('#downFont');
var upFont = $('#upFont');
var myFontSize = $('p');

$(document).ready(function() { 

// ---------sidebar

    btn.on('click', function(){
        sidebar.toggleClass('active');
    });

// ------- font-size + -

    upFont.click(function (event) {
        event.preventDefault();
        var fontSize = $('p').css('font-size');
        var newSize = parseInt(fontSize) + 1;
        newSize = newSize > maxFont ? maxFont: newSize;
        $('p').css('font-size', newSize + 'px');
        fontSize.change();
        }
    ); 

    downFont.click(function () {
        event.preventDefault();
        var fontSize = $('p').css('font-size');
        var newSize = parseInt(fontSize) - 1;
        newSize = newSize < minFont ? minFont: newSize;
        $('p').css('font-size', newSize + 'px');
        fontSize.change();
        }
    );

//--------onclick radio myFontSize

    $('input[name=mySize]').on('change', function() {
       myFontSize.removeClass().addClass($(this).val());
    });

// -----  remove last p-element-----

    $('#pfade').click(function() {
        $('p').last().remove();
    });
})