import "./images.css";
import editLogo from "../../assets/edit.png";
import deleteLogo from "../../assets/bin.png";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function ImagesList(props) {
  const { activeAlbum, setOpenForm, openForm } = props;
  const [isActive, setIsActive] = useState(false); //for showing edit, delete icons on hover
  const [imagesList, setImageList] = useState(activeAlbum.images); //storing respective album's images list

  const handleDelete = async (id) => {
    const temp = imagesList.filter((item, i) => {
      return id !== i;
    });

    // deleting the image using id
    const docRef = doc(db, "albums", activeAlbum.id);

    await updateDoc(docRef, {
      images: temp,
      name: activeAlbum.name,
    });
    setImageList(temp);
  };

  const handleEdit = async (item) => {
    setOpenForm(!openForm);
    localStorage.setItem("image", { title: item.title, url: item.url });
  };

  return (
    <div className="img-list">
      {imagesList?.map((item, i) => (
        <div
          className="img-item"
          key={i}
          onMouseEnter={(e) => {
            setIsActive(true);
          }}
          onMouseLeave={(e) => {
            setIsActive(false);
          }}
        >
          <img src={item.url} alt={item.title} />
          <span>{item.title}</span>
          <img
            src={editLogo}
            className={isActive ? "edit" : "hide"}
            alt="Edit"
            onClick={() => {
              handleEdit(item);
            }}
          />
          <img
            src={deleteLogo}
            className={isActive ? "delete" : "hide"} //adding classnames using conditional rendering
            alt="Delete"
            onClick={() => {
              handleDelete(i);
            }}
          />
        </div>
      ))}
    </div>
  );
}
