import React, { useState } from "react";

import "./layout.css";
import Navbar from "./Navbar/navbar";
import CreateAlbum from "./CreateAlbum/form";
import AlbumList from "./AlbumList/albumList";

import useFetch from "../useFetch";

export default function Layout() {
  const [openForm, setOpenForm] = useState(false); //to open create-album form
  const { albums, setAlbums } = useFetch(); //custom hook for fetching realtime data
  const [openImages, setOpenImages] = useState(false); //to open specific album's images

  return (
    <>
      <Navbar setOpenImages={setOpenImages} />
      <div className="content">
        {openForm && !openImages ? (
          <CreateAlbum albums={albums} setAlbums={setAlbums} />
        ) : null}
        <AlbumList
          openForm={openForm}
          setOpenForm={setOpenForm}
          albums={albums}
          setAlbums={setAlbums}
          openImages={openImages}
          setOpenImages={setOpenImages}
        />
      </div>
    </>
  );
}
