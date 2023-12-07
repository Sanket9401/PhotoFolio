import React, { useState, useRef } from "react";
import "./images.css";
import backLogo from "../../assets/back.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImagesList from "./imagesList";

export default function Images(props) {
  const { setOpenImages } = props;
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", url: "" });
  const inputTitleRef = useRef();
  const inputUrlRef = useRef();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // setFormData({ title: formData.title, url: formData.url });
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

  return (
    <>
      <ToastContainer />
      <div className="img-list-top">
        <span onClick={() => setOpenImages(false)}>
          <img src={backLogo} alt="Back" />
        </span>
        <h3>No Images Found</h3>
        <button
          className={openForm ? "cancel" : "add"}
          onClick={() => setOpenForm(!openForm)}
        >
          {openForm ? "Cancel" : "Add image"}
        </button>
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
                    title: inputUrlRef.current.value,
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
      <ImagesList />
    </>
  );
}
