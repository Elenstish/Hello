var maxFont = 24,
    minFont = 8;

// --------- sidebar

$('#burger').on('click', function(){
    $('.post-aside').toggleClass('active');
});

// ------- font-size 

$('._userSize').on({
    focus: function() {
        $(this).val();
        $(this).val("");
    },
    keydown: function(e) {
        if (e.which < 48 || e.which > 57) {
        alert('integer only')
        e.preventDefault();
        }
    },
    change: function() {
    var thisVal = parseInt($(this).val());       
        if (thisVal > maxFont || thisVal < minFont) {
        alert('input number from 8 to 24 only')
        return;
        }
    $('p').css('font-size', thisVal + 'px'); 
    }
});

// ----------- Color

$('._colorValue').change(function(){
    $('p').css('background-color', $(this).val()); 
});

//-------- myFontFamily

$('input[name=myFont]').change(function(e) {
    $('p').removeClass().addClass($(this).val());
});

// -----  remove last p-element

$('._pDel').click(function() {
    $('p').last().remove();
});

