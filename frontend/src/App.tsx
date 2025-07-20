import { useEffect, useState } from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDMoJfWZatkXeIdqniFQ-XbW0iCqlq3TvE",
  authDomain: "ghost-incidents-bot.firebaseapp.com",
  projectId: "ghost-incidents-bot",
  storageBucket: "ghost-incidents-bot.appspot.com",
  messagingSenderId: "421137956780",
  appId: "1:421137956780:web:b3d7ba24a03ae663804409",
  measurementId: "G-1GXWKYCPTF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [incidents, setIncidents] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const incidentsCol = collection(db, "incidents");
        const incidentSnapshot = await getDocs(incidentsCol);
        const incidentList = incidentSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIncidents(incidentList);
      } catch (error) {
        console.error("Error fetching incidents:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Ghost Incident Reports 👻</h1>
      {incidents.length === 0 ? (
        <p>Loading incidents...</p>
      ) : (
        <ul>
          {incidents.map((incident) => (
            <li key={incident.id}>
              <strong>{incident.title || "Untitled Incident"}</strong>
              <br />
              {incident.description || "No description"}
              <br />
              <small>{incident.timestamp}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
