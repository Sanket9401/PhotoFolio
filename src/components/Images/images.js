import React, { useState, useRef, useEffect } from "react";
import "./images.css";
import backLogo from "../../assets/back.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImagesList from "./imagesList";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import searchLogo from "../../assets/search.png";

export default function Images(props) {
  const { setOpenImages, activeAlbum, setActiveAlbum, setAlbums, isImgAdded } =
    props;
  const [openForm, setOpenForm] = useState(false); //for opening add image form
  const [formData, setFormData] = useState({ title: "", url: "" }); //storing data of new image
  const inputTitleRef = useRef(); //hooks for handling the input data
  const inputUrlRef = useRef();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      
      // adding the doc to add the new image title and url using updateDoc
      const docRef = doc(db, "albums", activeAlbum.id);

      await updateDoc(docRef, {
        images: [...activeAlbum.images, formData],
        name: activeAlbum.name,
      });
      setActiveAlbum({
        images: [...activeAlbum.images, formData],
        name: activeAlbum.name,
      });
      setOpenForm(!openForm);

      // toast message
      toast.success("Image added successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      inputTitleRef.current.value = "";
      inputUrlRef.current.value = "";
    } catch (error) {
      toast.error("Failed to add album", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } finally {
      inputTitleRef.current.focus();
    }
  };

  useEffect(() => {
    // for editing the existing image data
    let temp = localStorage.getItem("image");
    console.log(temp.title);
    if (temp) {
      setFormData(temp);
    }
  }, [openForm]);

  return (
    <>
      <ToastContainer />
      <div className="img-list-top">
        <span onClick={() => setOpenImages(false)}>
          <img src={backLogo} alt="Back" />
        </span>
        <h3>
          {activeAlbum.images.length === 0
            ? "No Images Found"
            : `Images in ${activeAlbum.name}`}
        </h3>
        <div
          style={{
            width: "25%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <span onClick={() => {}}>
            <img src={searchLogo} alt="Search" />
          </span>
          <button
            className={openForm ? "cancel" : "add"}
            onClick={() => setOpenForm(!openForm)} // adding classes and text using conditional rendering
          >
            {openForm ? "Cancel" : "Add image"}
          </button>
        </div>
      </div>

      {openForm ? (
        <>
          <div className="add-img">
            <span>Add an image to ...</span>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                ref={inputTitleRef}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    title: inputTitleRef.current.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="Image URL"
                ref={inputUrlRef}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    url: inputUrlRef.current.value,
                  });
                }}
              />
              <div className="btn">
                <button
                  type="reset"
                  className="clear"
                  onClick={() => {
                    inputTitleRef.current.value = "";
                    inputUrlRef.current.value = "";
                  }}
                >
                  Clear
                </button>
                <button type="submit" className="create">
                  Create
                </button>
              </div>
            </form>
          </div>
        </>
      ) : null}
      <ImagesList
        activeAlbum={activeAlbum}
        setOpenForm={setOpenForm}
        openForm={openForm}
      />
    </>
  );
}
