var sidebar = $('.post-aside');
var btn = $('button.buttonmobile');
var maxFont = 24;
var minFont = 8;
var myFontFamily = $('p');

// ---------sidebar

    btn.on('click', function(){
        sidebar.toggleClass('active');
    });

// ------- font-size 

    $('#userSize').change(function(event){
        event.preventDefault();
        var thisValue = parseInt($(this).val());
        var newSize = $(this).val();
        console.log(newSize);
         //onkeydown(function)
        if (newSize > 24 || newSize < 8) {
            alert('from 8 to 24 only')
            return;
        }
        $('p').css('font-size', newSize + 'px');
        }
    );


        function clearText(thefield){
        if (thefield.defaultValue==thefield.value) 
            thefield.value = "";
    }
    
//--------onclick radio myFontFamily

    $('input[name=myFont]').on('change', function() {
       myFontFamily.removeClass().addClass($(this).val());
    });

// -----  remove last p-element-----

    $('#pfade').click(function() {
        $('p').last().remove();
    });
