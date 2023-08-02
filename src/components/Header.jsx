import { Avatar } from "@mui/material";
import { EmojiSmile, GeoAlt, Film, Paperclip } from "react-bootstrap-icons";

import img from "../assets/profile-img.jpg";
import "./header.css";

export const Header = () => {
  return (
    <section className="header">
      <Avatar src={img} />

      <div className="header-pages">
        <h1 className="active">For You</h1>
        <h1>Following</h1>
      </div>

      <form className="header-form">
        <div className="header-form__top">
          <Avatar src={img} />

          <input
            type="text"
            className="header-input"
            placeholder="Talk to me..."
            autoFocus
          />
        </div>

        <div className="header-form__bottom">
          <div className="header-icons">
            <Film />
            <Paperclip />
            <EmojiSmile />
            <GeoAlt />
          </div>

          <button className="header-btn">Post</button>
        </div>
      </form>
    </section>
  );
};
