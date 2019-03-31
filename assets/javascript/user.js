$(document).ready(function () {

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
    var storage = firebase.storage();






    function storeInDBandDisplay(userobject) {
        var displayName = userobject.displayName;
        var email = userobject.email;
        // var emailVerified = user.emailVerified;
        var photoURL = '';
        // var isAnonymous = user.isAnonymous;
        var uid = userobject.uid;
        // var providerData = user.providerData;



        var selectedFile;
        var filename;


        var emailStorageRef = storage.ref(email);
        // console.log("this is the email storage ref: "+emailStorageRef);
        // var stringEmailStorageRef = String(emailStorageRef);

        // var getEmailFromStorageRef = stringEmailStorageRef.slice(32);
        // console.log(" here is the slice: "+getEmailFromStorageRef);

        $("#file-select").on("change", handleFileUploadChange)

        function handleFileUploadChange(event) {
            selectedFile = event.target.files[0];
            // console.log(selectedFile);
            // console.log(userobject);
            filename = selectedFile.name;
            console.log(filename);


            emailStorageRef.put(selectedFile).then(function (snapshot) {

                emailStorageRef.getDownloadURL().then(function (url) {

                    // console.log("yo yoyoyoyoyoyo this is the url"+url);
                    photoURL = url;

                    database.ref("/users/" + uid + "/photoURL").set(photoURL);
                }).catch(function (error) {
                    // Handle any errors
                    // console.log("it entered the catch in the promise!");
                });
            });
        }



        database.ref("/users/" + uid).onDisconnect().remove();

        database.ref("/users").update({

            [uid]:

            {
                displayName: displayName,
                email: email,
                photoURL: photoURL,
                uid: uid
            }
        });

        database.ref("/users/" + uid).on("value", function (snapshot) {

            // var pictureDiv = $("<div>");
            // pictureDiv.attr("id", "img-id");
            var img = $(".profile-pic");

            // persist profile picture
            emailStorageRef.getDownloadURL().then(function (url) {

                // console.log("yo yoyoyoyoyoyo this is the url"+url);
                photoURL = url;

                database.ref("/users/" + uid + "/photoURL").set(photoURL);
                img.attr("src", snapshot.val().photoURL);

            }).catch(function (error) {
                // Handle any errors
                // console.log("it entered the catch in the promise!");
                img.attr("src", "assets/images/nature.jpg");
            });


            $("#image-title").text("Hacker " + snapshot.val().displayName);

            var userInformationDiv = $("<div>");
            userInformationDiv.attr("id", "contact-info");


            var pname = $("<p>");
            var pemail1 = $("<p>");
            var pemail2 = $("<p>");



            pname.text("Welcome " + snapshot.val().displayName + "!");
            pemail1.text("Email:");
            pemail2.text(snapshot.val().email);

            // pictureDiv.append(img);
            userInformationDiv.append(pname).append(pemail1).append(pemail2);

            // $("#display-image").append(pictureDiv)
            $(".user-info").empty();
            $(".user-info").append(userInformationDiv);

        });

    };

    function addDivforChatandThenInitChat(userobject) {
        var chatDiv = $("<div>");
        chatDiv.attr("id", "firechat-wrapper");
        $("#dislay-chat").append(chatDiv);

        // Get a Firebase Database ref
        var chatRef = firebase.database().ref("chat");

        // Create a Firechat instance
        var chat = new FirechatUI(chatRef, $("#firechat-wrapper"));

        // Set the Firechat user
        chat.setUser(userobject.uid, userobject.displayName);

    };



    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user);
            // User is signed in.
            storeInDBandDisplay(user);
            addDivforChatandThenInitChat(user);
            // useStrorage(user);
            // ...
        } else {
            // User is signed out.
            // ...
        }
    });

});



// function useStrorage(userobject) {
//     let selectedFile;

//     $("#file-select").on("change", handleFileUploadChange)

//     function handleFileUploadChange(event) {
//         selectedFile = event.target.files[0];
//         console.log(selectedFile);
//         console.log(userobject);
//     }

//     var displayName = userobject.displayName;
//     var email = userobject.email;
//     // var emailVerified = user.emailVerified;
//     var photoURL = userobject.photoURL;
//     // var isAnonymous = user.isAnonymous;
//     var uid = userobject.uid;

//     var emailStorageRef = storage.ref(email);

//     var upload = emailStorageRef.put(selectedFile);


// }