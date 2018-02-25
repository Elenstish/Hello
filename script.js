var maxFont = 24,
    minFont = 8;

// --------- sidebar

$('#burger').on('click', function(){
    $('.post-aside').toggleClass('active');
});

// ------- font-size 

/*$('._userSize').on({
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
});*/

$('._userSize').change(function() {
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
 
// Initialize Firebase
var config = {
apiKey: "AIzaSyBiDAdDxnjSmn7_48WGxCb7nPq8xcnCB6U",
authDomain: "hello-da5f4.firebaseapp.com",
databaseURL: "https://hello-da5f4.firebaseio.com",
projectId: "hello-da5f4",
storageBucket: "hello-da5f4.appspot.com",
messagingSenderId: "396732252137"
};
firebase.initializeApp(config);

/*var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => bigOne.innerText = snap.val());*/

var uiConfig = {  
    signInSuccessUrl: 'loggedIn.html',  
    signInOptions: [  
    // Указываем провайдеров для Firebase Аутентификации
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,  
    firebase.auth.EmailAuthProvider.PROVIDER_ID  
    ],  
    // Здесь вы можете специфировать условия к использованию, которые будут показаны при виджете 
    tosUrl: '<your-tos-url>'  
};  
// Инициализирум FirebaseUI виджет   
var ui = new firebaseui.auth.AuthUI(firebase.auth());  
// Для начала методы мы подождем пока html полностью загрузиться
ui.start('#firebaseui-auth-container', uiConfig);  


var currentUid = null;  
firebase.auth().onAuthStateChanged(function(user) {  
    // Слушатель onAuthStateChanged срабатывает каждый раз когда токен пользователя меняется
    // Это может случиться когда уже новый пользователь логинится, например.
    // Или это также может случиться когда токен пользователя истек
    if (user && user.uid != currentUid) {  
    // Обноваляем UI когда новый пользователь логинится
    // В другом случае игнорируем если это обновление токена
    // Обновляем UID текущего пользователя 
    currentUid = uid;  
    } else {  
    // Операция выхода из приложения. Переустанавливает UID текущего пользователя
    currentUid = null;  
    }  
});  