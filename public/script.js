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
        {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID, 
        authMethod: 'https://accounts.google.com',
        clientId: CLIENT_ID
        },
        {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
        requireDisplayName: true
        }
    }
    ],  
    /*tosUrl: '<your-tos-url>'*/  

    tosUrl: 'https://www.google.com',
    credentialHelper: CLIENT_ID && CLIENT_ID != 'YOUR_OAUTH_CLIENT_ID' ?
        firebaseui.auth.CredentialHelper.GOOGLE_YOLO :
        firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};  

var ui = new firebaseui.auth.AuthUI(firebase.auth());  
ui.start('#firebaseui-auth-container', uiConfig);



