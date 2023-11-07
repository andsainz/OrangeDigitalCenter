import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDetg5MceTaTee7nuaT2D1CasUD3V04rhc",
    authDomain: "orangedigitalcenter-4a012.firebaseapp.com",
    databaseURL: "https://orangedigitalcenter-4a012-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "orangedigitalcenter-4a012",
    storageBucket: "orangedigitalcenter-4a012.appspot.com",
    messagingSenderId: "423262819634",
    appId: "1:423262819634:web:7db3228dc40115360b332b"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database


