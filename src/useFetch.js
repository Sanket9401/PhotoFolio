import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

export default function useFetch() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function getAllAlbums() {
      const unsub = onSnapshot(collection(db, "albums"), (snapshot) => {
        const albums = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log(albums);
        setAlbums(albums);
        // setLodingData(false);
      });
    }
    getAllAlbums();
  }, []);

  return { albums, setAlbums };
}
