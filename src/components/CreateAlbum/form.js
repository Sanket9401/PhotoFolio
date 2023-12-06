import "./form.css";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateAlbum(props) {
  const { albums, setAlbums } = props;
  const [albumName, setAlbumName] = useState("");
  const inputRef = useRef();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setAlbums([...albums, albumName]);
      toast.success("Album added successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
    } catch (error) {
      toast.error("Failed to add album", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="create-album">
        <span>Create an Album</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Album Name"
            ref={inputRef}
            onChange={(e) => {
              setAlbumName(inputRef.current.value);
            }}
          />
          <button
            type="reset"
            className="clear"
            onClick={() => {
              inputRef.current.value = "";
            }}
          >
            Clear
          </button>
          <button type="submit" className="create">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
