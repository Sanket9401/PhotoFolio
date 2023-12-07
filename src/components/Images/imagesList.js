import "./images.css";
import editLogo from "../../assets/edit.png";
import deleteLogo from "../../assets/bin.png";
import { useState } from "react";

export default function ImagesList(props) {
  const [isActive, setIsActive] = useState(false);
  const data = [
    {
      title: "Hindi",
      url: "https://play-lh.googleusercontent.com/QVLPlvZDkK4H_LDapOXIah0WR6pvm1pkmMVX2E7cE0sZ_7-v0ki4RWLJy44AZd2VxKM",
    },
    {
      title: "Marathi",
      url: "https://yt3.googleusercontent.com/WvmN58YKEIghgbJ6feEUluRrNhsYla8-mkI-s-7L2rOxsWlAzsityy06ShJb88z8_sKH4KBV=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "English",
      url: "https://t4.ftcdn.net/jpg/01/06/47/61/360_F_106476142_zMZkkTkhMeq0DIjV20oJI00e3QXLYIGN.jpg",
    },
  ];

  // const ()
  return (
    <div className="img-list">
      {data.map((item, i) => (
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
          />
          <img
            src={deleteLogo}
            className={isActive ? "delete" : "hide"}
            alt="Delete"
          />
        </div>
      ))}
    </div>
  );
}
