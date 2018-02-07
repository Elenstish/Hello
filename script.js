var sidebar = $('.post-aside');
var btn = $('button.buttonmobile');
var maxFont = 24;
var minFont = 8;

// ---------sidebar

btn.on('click', function(){
    sidebar.toggleClass('active');
});

// ------- font-size 

$('#userSize').change(function(event){
    event.preventDefault();
    var thisValue = parseInt($(this).val());
    var newSize = thisValue;
    
    if (newSize > maxFont || newSize < minFont) {
    alert('input number from 8 to 24 only')
    return;
    }

    $('p').css('font-size', newSize + 'px'); 

});

$('#userSize').keydown(function(e){
    if (e.which < 48 || e.which > 57) {
        alert('integer only')
        event.preventDefault();
    }    
});

$('#userSize').focus(function(){
    elementValue = $(this).val();
    $(this).val("");
});

    
//--------onclick radio myFontFamily

$('input[name=myFont]').on('change', function() {
    $('p').removeClass().addClass($(this).val());
});

// -----  remove last p-element

$('#pfade').click(function() {
    $('p').last().remove();
});

// -----------Color

$('#input_color_value').change(function(event){
    event.preventDefault();
    var value = $(this).val();
    var result = value;
    
    $('body').css('background-color', result); 

});