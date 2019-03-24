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
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            console.log();
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'project1.html',
    signInOptions: [
        {
        
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true
    }
        
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
