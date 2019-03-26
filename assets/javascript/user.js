$(document).ready(function () {

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
    var database = firebase.database();


    function storeInDBandDisplay(userobject) {
        var displayName = userobject.displayName;
        var email = userobject.email;
        // var emailVerified = user.emailVerified;
        var photoURL = userobject.photoURL;
        // var isAnonymous = user.isAnonymous;
        var uid = userobject.uid;
        // var providerData = user.providerData;

        database.ref("/users").update({

            [uid]:

            {
                displayName: displayName,
                email: email,
                photoURL: photoURL,
                uid: uid
            }
        });

        database.ref("/users/"+uid).on("value",function(snapshot){

            var pictureDiv = $("<div>");
            pictureDiv.attr("id","img-id");

            var userInformationDiv = $("<div>");
            userInformationDiv.attr("id","contact-info");

            var img = $("<img>");
            var pname = $("<p>");
            var pemail1 = $("<p>");
            var pemail2 = $("<p>");

            img.attr("src",snapshot.val().photoURL);

            pname.text("Welcome "+ snapshot.val().displayName + "!");
            pemail1.text("Email:");
            pemail2.text(snapshot.val().email);

            pictureDiv.append(img);
            userInformationDiv.append(pname).append(pemail1).append(pemail2);

            $("#page").append(pictureDiv).append(userInformationDiv);

        });

    };

    function addDivforChatandThenInitChat(userobject){
        var chatDiv = $("<div>");
        chatDiv.attr("id","firechat-wrapper");
        $("#page").append(chatDiv);

        // Get a Firebase Database ref
        var chatRef = firebase.database().ref("chat");

        // Create a Firechat instance
        var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

        // Set the Firechat user
        chat.setUser(userobject.uid, userobject.displayName);
      
    };



    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user);
            // User is signed in.
            storeInDBandDisplay(user);
            addDivforChatandThenInitChat(user);

            // ...
        } else {
            // User is signed out.
            // ...
        }
    });

});