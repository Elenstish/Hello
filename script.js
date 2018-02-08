var sidebar = $('.post-aside');
var maxFont = 24;
var minFont = 8;

// ---------sidebar

$('#burger').on('click', function(e){
    sidebar.toggleClass('active');
});

// ------- font-size 

$('#userSize').on({
    focus: function(e) {
        elementValue = $(this).val();
        $(this).val("");
        event.preventDefault();
    },
    keydown: function(e) {
        if (e.which < 48 || e.which > 57) {
        alert('integer only')
        event.preventDefault();
        }
    },
    change: function(e) {
    var thisValue = parseInt($(this).val());
    var newSize = thisValue;    
        if (newSize > maxFont || newSize < minFont) {
        alert('input number from 8 to 24 only')
        return;
        }
    $('p').css('font-size', newSize + 'px'); 
    }
});

// -----------Color

$('#colorValue').change(function(e){
    event.preventDefault();
    var value = $(this).val();
    var result = value;    
    $('p').css('background-color', result); 
});

//--------onclick radio myFontFamily

$('input[name=myFont]').change(function(e) {
    $('p').removeClass().addClass($(this).val());
});

// -----  remove last p-element

$('#pFade').click(function(e) {
    $('p').last().remove();
});