import { useState } from "react";
import "./albumList.css";
import albumLogo from "../../assets/album.png";
import Images from "../Images/images.js";
import Spinner from "react-spinner-material";

export default function AlbumList(props) {
  const {
    openForm,
    setOpenForm,
    albums,
    setAlbums,
    openImages,
    setOpenImages,
    isImgAdded,
  } = props;
  const [activeAlbum, setActiveAlbum] = useState(); // for storing selected album's data


  // conditional rendering for opening respective images folder of selected album 
  return (
    <>
      {openImages ? (
        <Images
          setOpenImages={setOpenImages}
          activeAlbum={activeAlbum}
          setActiveAlbum={setActiveAlbum}
          setAlbums={setAlbums}
          isImgAdded={isImgAdded}
        />
      ) : (
        <>
          <div className="album-list-top">
            <span>Your Albums</span>
            <button
              className={openForm ? "cancel" : "add"}
              onClick={() => setOpenForm(!openForm)}
            >
              {openForm ? "Cancel" : "Add Album"}
            </button>
          </div>
          <div className="album-list-container">
            {albums.map((item, i) => (
              <div
                className="album"
                key={i}
                onClick={() => {
                  setActiveAlbum(item); //stored selected album's data
                  setOpenImages(true); //open images folder
                }}
              >
                <div className="album-img">
                  <img src={albumLogo} alt="Album" />
                </div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
