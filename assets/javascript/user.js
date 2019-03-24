$(document).ready(function(){

$(".signup").on("click", function () {
    window.location = "sign_in.html";
    console.log("button clicked: ");
});

$(".login").on("click", function () {
    window.location = "log_in.html";
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
var database= firebase.database();


function storeInDBandDisplay (userobject){
    var displayName = userobject.displayName;
    var email = userobject.email;
    // var emailVerified = user.emailVerified;
    var photoURL = userobject.photoURL;
    // var isAnonymous = user.isAnonymous;
    var uid = userobject.uid;
    // var providerData = user.providerData;

    database.ref("/users").push({
        displayName:displayName,
        email:email,
        photoURL:photoURL,
        uid:uid
    });

};



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user);
      // User is signed in.
      storeInDBandDisplay(user);

      // ...
    } else {
      // User is signed out.
      // ...
    }
  });

});