import React, { useState } from "react";

import "./layout.css";
import Navbar from "./Navbar/navbar";
import CreateAlbum from "./CreateAlbum/form";
import AlbumList from "./AlbumList/albumList";

export default function Layout() {
  const [openForm, setOpenForm] = useState(false);
  const [albums, setAlbums] = useState([
    "Album1",
    "Album2",
    "Album3",
    "Album4",
    "Album5",
    "Album6",
    "Album7",
    "Album8",
    "Album9",
    "Album10",
  ]);
  const [openImages, setOpenImages] = useState(false);
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
        />
      </div>
    </>
  );
}
