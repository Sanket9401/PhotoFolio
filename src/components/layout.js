import React, { useEffect, useState } from "react";

import "./layout.css";
import Navbar from "./Navbar/navbar";
import CreateAlbum from "./CreateAlbum/form";
import AlbumList from "./AlbumList/albumList";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

export default function Layout() {
  const [openForm, setOpenForm] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [openImages, setOpenImages] = useState(false);
  const [loadingData, setLodingData] = useState(false);

  useEffect(() => {
    async function getAllAlbums() {
      const querySnapshot = await getDocs(collection(db, "albums"));
      const allAlbums = querySnapshot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data());
        return { id: doc.id, ...doc.data() };
      });
      console.log(albums);
      setAlbums(allAlbums);
    }
    getAllAlbums();
    setLodingData(false);
  }, []);

  return (
    <>
      <Navbar />
      <div className="content">
        {openForm && !openImages ? (
          <CreateAlbum albums={albums} setAlbums={setAlbums} />
        ) : null}
        <AlbumList
          openForm={openForm}
          setOpenForm={setOpenForm}
          albums={albums}
          openImages={openImages}
          setOpenImages={setOpenImages}
          loadingData={loadingData}
        />
      </div>
    </>
  );
}
