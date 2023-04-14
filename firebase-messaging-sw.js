importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCW5e2H1nXQHjdQzQMBZu9QNaI23IBtL8A",
    authDomain: "daftarmenu-6329e.firebaseapp.com",
    databaseURL: "https://daftarmenu-6329e-default-rtdb.firebaseio.com",
    projectId: "daftarmenu-6329e",
    storageBucket: "daftarmenu-6329e.appspot.com",
    messagingSenderId: "781189605118",
    appId: "1:781189605118:web:0beb4087db7848aae2e7af",
    measurementId: "G-614J9ZD5JR"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
    console.log("onBackgroundMessage", m);
});