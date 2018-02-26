// --------- sidebar

$('#burger').on('click', function(){
    $('.post-aside').toggleClass('active');
});

// ----------- Firebase

var config = {
    apiKey: "AIzaSyDmofv8bI3yYBqy7e5chw9ZTd3MBmUYAOo",
    authDomain: "hello-ad19f.firebaseapp.com",
    databaseURL: "https://hello-ad19f.firebaseio.com",
    projectId: "hello-ad19f",
    storageBucket: "hello-ad19f.appspot.com",
    messagingSenderId: "1021016329506"
};
firebase.initializeApp(config);

var uiConfig = {  
    signInSuccessUrl: 'loggedIn.html',  
    signInOptions: [ 
    firebase.auth.GoogleAuthProvider.PROVIDER_ID, 
    firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],  
    
    /*tosUrl: '<your-tos-url>'*/  
    tosUrl: 'https://www.google.com',
};  

var ui = new firebaseui.auth.AuthUI(firebase.auth());  
ui.start('#firebaseui-auth-container', uiConfig);



