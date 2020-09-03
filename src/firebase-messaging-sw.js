// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyAxrbDVabn9mkKw75NWvXrE_SIa1TpR82c',
    authDomain: 'platzi-store-pwa-fdc4c.firebaseapp.com',
    databaseURL: 'https://platzi-store-pwa-fdc4c.firebaseio.com',
    projectId: 'platzi-store-pwa-fdc4c',
    storageBucket: 'platzi-store-pwa-fdc4c.appspot.com',
    messagingSenderId: '750798380283',
    appId: '1:750798380283:web:ead73f781ee18ab6a8245e'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();