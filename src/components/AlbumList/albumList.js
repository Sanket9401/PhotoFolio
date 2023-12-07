// import { useState } from "react";
import "./albumList.css";
import albumLogo from "../../assets/album.png";
import Images from "../Images/images.js";
import Spinner from "react-spinner-material";

export default function AlbumList(props) {
  const {
    openForm,
    setOpenForm,
    albums,
    openImages,
    setOpenImages,
    loadingData,
  } = props;
  console.log(albums);
  return (
    <>
      {openImages ? (
        <Images setOpenImages={setOpenImages} />
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
          <Spinner
            radius={120}
            color={"#333"}
            stroke={2}
            visible={loadingData}
          />
          <div className="album-list-container">
            {albums.map((item, i) => (
              <div
                className="album"
                key={i}
                onClick={() => setOpenImages(true)}
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
