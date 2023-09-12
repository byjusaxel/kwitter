
//AÑADE TUS ENLACES DE FIREBASE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAC1_YuDbdyV0xLd54GZWaCgI02V0uTKVI",
      authDomain: "redsocial-2692f.firebaseapp.com",
      databaseURL: "https://redsocial-2692f-default-rtdb.firebaseio.com",
      projectId: "redsocial-2692f",
      storageBucket: "redsocial-2692f.appspot.com",
      messagingSenderId: "824496949038",
      appId: "1:824496949038:web:e8093d93478f83613e1cbf"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");

     document.getElementById("user_name").innerHTML="Hola " + user_name +" !!!";

     function addRoom() {
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
             });
            localStorage.setItem("room_name", room_name)
            ; window.location = "kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
       
      //Final del código
      });});}
getData();

function redirectToRoomName(name)
{
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitter_page.html";
}
function logout()
{
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="index.html";
}