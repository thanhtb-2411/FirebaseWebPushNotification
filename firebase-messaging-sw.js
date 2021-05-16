importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAzj8OlwghUpb6mNH02pVkQ2SHlMgjJ6Kc",
    authDomain: "superchat-bcc4c.firebaseapp.com",
    databaseURL: "https://superchat-bcc4c-default-rtdb.firebaseio.com",
    projectId: "superchat-bcc4c",
    storageBucket: "superchat-bcc4c.appspot.com",
    messagingSenderId: "115461820385",
    appId: "1:115461820385:web:fb0635161e85eb23ff4ca0",
    measurementId: "G-G4Q9ZZJHV5"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});