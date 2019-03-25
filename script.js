
// click function for login page
$("#button-login").on("click", function(){
    
    var emailLogin = $("#email-input-login").val().trim();
    var passwordLogin = $("#password-input-login").val().trim();

    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin.catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      }));

})

// click function for sign up page
$("#button-signup").on("click", function(){

    var emailSignup = $("#email-input-signup").val().trim();
    var passwordSignup = $("#password-input-signup").val().trim();

    firebase.auth().createUserWithEmailAndPassword(emailSignup, passwordSignup).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

})



$(".back-button").on("click", function () {
    window.location = "project1.html";
    console.log("button clicked: ");
});

var config = {
    apiKey: "AIzaSyCv8Qv88n2ge3Q8VvqG1ekBjbNDp9jkDLc",
    authDomain: "codebook-6130b.firebaseapp.com",
    databaseURL: "https://codebook-6130b.firebaseio.com",
    projectId: "codebook-6130b",
    storageBucket: "codebook-6130b.appspot.com",
    messagingSenderId: "740560354140"
};
firebase.initializeApp(config);

var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);