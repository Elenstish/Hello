var maxFont = 24,
    minFont = 8;

$(document).ready(function() {

// --------- sidebar

    $('#burger').on('click', function(){
        $('.post-aside').toggleClass('active');
    });

    // ------- font-size 

    $('._userSize').click(function() {
        var thisVal = $(this).val();       
            if (thisVal > maxFont || thisVal < minFont) {
            return;
            }
        $('p').css('font-size', thisVal + 'px'); 
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

});
 
// ------ Firebase

var config = {
    apiKey: "AIzaSyDmofv8bI3yYBqy7e5chw9ZTd3MBmUYAOo",
    authDomain: "hello-ad19f.firebaseapp.com",
    databaseURL: "https://hello-ad19f.firebaseio.com",
    projectId: "hello-ad19f",
    storageBucket: "hello-ad19f.appspot.com",
    messagingSenderId: "1021016329506"
};
firebase.initializeApp(config);

var currentUid = null; 


function toggleSignIn() {
    if (!firebase.auth().currentUser) {
        var provider = new firebaseui.auth.AuthUI(firebase.auth()); 
        var user = result.user;
    } else {
        firebase.auth().signOut();
        }
    };

function initApp() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user && user.uid != handleSignedInUser(user)) {
            var displayName = user.displayName;
            var uid = user.uid;
            document.getElementById('signOut').textContent = 'Log out';
               
        } else {
            currentUid = null;
            window.location.href = 'index.html';
            }             
        document.getElementById('signOut').disabled = false;
    });
    document.getElementById('signOut').addEventListener('click', toggleSignIn, false);
}

var handleSignedInUser = function(user) {
    document.getElementById('name').textContent = user.displayName;
    if (user.photoURL){
        document.getElementById('photo').src = user.photoURL;
        document.getElementById('photo').style.display = 'block';
    } else {
        document.getElementById('photo').style.display = 'none';
    }
};

window.addEventListener('load', initApp);





