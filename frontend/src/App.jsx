import database from "./firebase/firebaseConfig";
import { ref, onValue, child, push, update } from "firebase/database";
import { useState, useEffect } from "react";


function App() {
  {/* GET */ }
  const database2 = database
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const reference = ref(database2, 'activities/');

    const fetchData = () => {
      onValue(reference, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setActivities(data);
        }
      });
    }
    fetchData();
  },
    [database]);

  console.log(activities)

  {/* POST */}
  function writeNewPost() {
    const db = database;
  
    // A post entry.
    const postData = {
      category: "taller",
      date: "23/10/23"
    };
  
    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'activities')).key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/activities/' +"activity" ] = postData;

  
    return update(ref(db), updates);
  }
  

  return (
    <>
      <h1>¡Hola!</h1>
      <button onClick={() => {writeNewPost()}}>jola</button>
    </>
  );
}

export default App
