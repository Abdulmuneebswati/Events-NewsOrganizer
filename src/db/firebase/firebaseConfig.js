
import admin from "firebase-admin"
import serviceAccount from "./eventsandnews-623c6-firebase-adminsdk-vgnn8-7b14115d51.json" assert { type: "json" };


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket:"gs://eventsandnews-623c6.appspot.com"
});

export default admin;
