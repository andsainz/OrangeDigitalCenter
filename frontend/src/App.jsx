import database from "./firebase/firebaseConfig";
import { ref, onValue, getDatabase } from "firebase/database";
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
  
  return (
    <>
      <h1>¡Hola!</h1>
    </>
  );
}

export default App
